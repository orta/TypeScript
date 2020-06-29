namespace ts.classifier.vscode {
    
  enum TokenType {
    class, enum, interface, namespace, typeParameter, type, parameter, variable, enumMember, property, function, member, _
  }

  enum TokenModifier {
    declaration, static, async, readonly, defaultLibrary, local, _
  }

  enum TokenEncodingConsts {
    typeOffset = 8,
    modifierMask = (1 << typeOffset) - 1
  }

  /** This is mainly used internally for testing  */
  export function getSemanticClassifications(program: Program, _cancellationToken: CancellationToken, sourceFile: SourceFile, span: TextSpan): ClassifiedSpan[] {
    const classifications = getEncodedSemanticClassifications(program, _cancellationToken, sourceFile, span)
    
    Debug.assert(classifications.spans.length % 3 === 0);
    const dense = classifications.spans;
    const result: ClassifiedSpan[] = [];
    for (let i = 0; i < dense.length; i += 3) {
        result.push({
            textSpan: createTextSpan(dense[i], dense[i + 1]),
            classificationType: dense[i + 2] as any // getClassificationTypeName(dense[i + 2])
        });
    }

    return result;
  }

  export function getEncodedSemanticClassifications(program: Program, _cancellationToken: CancellationToken, sourceFile: SourceFile, span: TextSpan): Classifications {
    return {
      spans: getSemanticTokens(program, sourceFile, span),
      endOfLineState: ts.EndOfLineState.None
    }
  }

  function getSemanticTokens(program: Program, sourceFile:SourceFile, span: TextSpan): number[] {
    let resultTokens: number[] = [];

    const collector = (node: Node, typeIdx: number, modifierSet: number) => {
      resultTokens.push(node.getStart(), node.getWidth(), ((typeIdx + 1) << TokenEncodingConsts.typeOffset) + modifierSet);
    };

    if (program && sourceFile) {
        collectTokens(program, sourceFile, span, collector);
    }
    return resultTokens;
  }

  function collectTokens(program: Program, sourceFile: SourceFile, span: TextSpan, collector: (node: Node, tokenType: number, tokenModifier: number) => void) {
    const typeChecker = program.getTypeChecker();

    let inJSXElement = false;

    function visit(node: Node) {
      if (!node || !textSpanIntersectsWith(span, node.pos, node.getFullWidth()) || node.getFullWidth() === 0) {
        return;
      }
      const prevInJSXElement = inJSXElement;
      if (isJsxElement(node) || isJsxSelfClosingElement(node)) {
        inJSXElement = true;
      }
      if (isJsxExpression(node)) {
        inJSXElement = false;
      }

      if (isIdentifier(node) && !inJSXElement && !inImportClause(node)) {
        let symbol = typeChecker.getSymbolAtLocation(node);
        if (symbol) {
          if (symbol.flags & SymbolFlags.Alias) {
            symbol = typeChecker.getAliasedSymbol(symbol);
          }
          let typeIdx = classifySymbol(symbol, getMeaningFromLocation(node));
          if (typeIdx !== undefined) {
            let modifierSet = 0;
            if (node.parent) {
              const parentIsDeclaration = (isBindingElement(node.parent) || tokenFromDeclarationMapping[node.parent.kind] === typeIdx);
              if (parentIsDeclaration && (<NamedDeclaration>node.parent).name === node) {
                modifierSet = 1 << TokenModifier.declaration;
              }
            }

            // property declaration in constructor
            if (typeIdx === TokenType.parameter && isRightSideOfQualifiedNameOrPropertyAccess(node)) {
              typeIdx = TokenType.property;
            }

            typeIdx = reclassifyByType(typeChecker, node, typeIdx);

            const decl = symbol.valueDeclaration;
            if (decl) {
              const modifiers = getCombinedModifierFlags(decl);
              const nodeFlags = getCombinedNodeFlags(decl);
              if (modifiers & ModifierFlags.Static) {
                modifierSet |= 1 << TokenModifier.static;
              }
              if (modifiers & ModifierFlags.Async) {
                modifierSet |= 1 << TokenModifier.async;
              }
              if (typeIdx !== TokenType.class && typeIdx !== TokenType.interface) {
                if ((modifiers & ModifierFlags.Readonly) || (nodeFlags & NodeFlags.Const) || (symbol.getFlags() & SymbolFlags.EnumMember)) {
                  modifierSet |= 1 << TokenModifier.readonly;
                }
              }
              if ((typeIdx === TokenType.variable || typeIdx === TokenType.function) && isLocalDeclaration(decl, sourceFile)) {
                modifierSet |= 1 << TokenModifier.local;
              }
              if (program.isSourceFileDefaultLibrary(decl.getSourceFile())) {
                modifierSet |= 1 << TokenModifier.defaultLibrary;
              }
            } else if (symbol.declarations && symbol.declarations.some(d => program.isSourceFileDefaultLibrary(d.getSourceFile()))) {
              modifierSet |= 1 << TokenModifier.defaultLibrary;
            }

            collector(node, typeIdx, modifierSet);

          }
        }
      }
      forEachChild(node, visit);

      inJSXElement = prevInJSXElement;
    }
    visit(sourceFile);
  }

  function classifySymbol(symbol: Symbol, meaning: SemanticMeaning): TokenType | undefined {
    const flags = symbol.getFlags();
    if (flags & SymbolFlags.Class) {
      return TokenType.class;
    } else if (flags & SymbolFlags.Enum) {
      return TokenType.enum;
    } else if (flags & SymbolFlags.TypeAlias) {
      return TokenType.type;
    } else if (flags & SymbolFlags.Interface) {
      if (meaning & SemanticMeaning.Type) {
        return TokenType.interface;
      }
    } else if (flags & SymbolFlags.TypeParameter) {
      return TokenType.typeParameter;
    }
    let decl = symbol.valueDeclaration || symbol.declarations && symbol.declarations[0];
    if (decl && isBindingElement(decl)) {
      decl = getDeclarationForBindingElement(<BindingElement>decl);
    }
    return decl && tokenFromDeclarationMapping[decl.kind];
  }

  function reclassifyByType(typeChecker: TypeChecker, node: Node, typeIdx: TokenType): TokenType {
    // type based classifications
    if (typeIdx === TokenType.variable || typeIdx === TokenType.property || typeIdx === TokenType.parameter) {
      const type = typeChecker.getTypeAtLocation(node);
      if (type) {
        const test = (condition: (type: Type) => boolean) => {
          return condition(type) || type.isUnion() && type.types.some(condition);
        }
        if (typeIdx !== TokenType.parameter && test(t => t.getConstructSignatures().length > 0)) {
          return TokenType.class;
        }
        if (test(t => t.getCallSignatures().length > 0) && !test(t => t.getProperties().length > 0) || isExpressionInCallExpression(node)) {
          return typeIdx === TokenType.property ? TokenType.member : TokenType.function;
        }
      }
    }
    return typeIdx;
  }

  function isLocalDeclaration(decl: Declaration, sourceFile: SourceFile): boolean {
    if (isBindingElement(decl)) {
      decl = getDeclarationForBindingElement(decl);
    }
    if (isVariableDeclaration(decl)) {
      return (!isSourceFile(decl.parent.parent.parent) || isCatchClause(decl.parent)) && decl.getSourceFile() === sourceFile;
    } else if (isFunctionDeclaration(decl)) {
      return !isSourceFile(decl.parent) && decl.getSourceFile() === sourceFile;
    }
    return false;
  }

  function getDeclarationForBindingElement(element: BindingElement): VariableDeclaration | ParameterDeclaration {
    while (true) {
      if (isBindingElement(element.parent.parent)) {
        element = element.parent.parent;
      } else {
        return element.parent.parent;
      }
    }
  }

  function inImportClause(node: Node): boolean {
    const parent = node.parent;
    return parent && (isImportClause(parent) || isImportSpecifier(parent) || isNamespaceImport(parent));
  }

  function isExpressionInCallExpression(node: Node): boolean {
    while (isRightSideOfQualifiedNameOrPropertyAccess(node)) {
      node = node.parent
    }
    return isCallExpression(node.parent) && node.parent.expression === node;
  }

  function isRightSideOfQualifiedNameOrPropertyAccess(node: Node): boolean {
    return (isQualifiedName(node.parent) && node.parent.right === node) || (isPropertyAccessExpression(node.parent) && node.parent.name === node);
  }

  const enum SemanticMeaning {
    None = 0x0,
    Value = 0x1,
    Type = 0x2,
    Namespace = 0x4,
    All = Value | Type | Namespace
  }

  function getMeaningFromLocation(node: Node): SemanticMeaning {
    const f = (<any>ts).getMeaningFromLocation;
    if (typeof f === 'function') {
      return f(node);
    }
    return SemanticMeaning.All;
  }

  const tokenFromDeclarationMapping: { [name: string]: TokenType } = {
    [SyntaxKind.VariableDeclaration]: TokenType.variable,
    [SyntaxKind.Parameter]: TokenType.parameter,
    [SyntaxKind.PropertyDeclaration]: TokenType.property,
    [SyntaxKind.ModuleDeclaration]: TokenType.namespace,
    [SyntaxKind.EnumDeclaration]: TokenType.enum,
    [SyntaxKind.EnumMember]: TokenType.enumMember,
    [SyntaxKind.ClassDeclaration]: TokenType.class,
    [SyntaxKind.MethodDeclaration]: TokenType.member,
    [SyntaxKind.FunctionDeclaration]: TokenType.function,
    [SyntaxKind.FunctionExpression]: TokenType.function,
    [SyntaxKind.MethodSignature]: TokenType.member,
    [SyntaxKind.GetAccessor]: TokenType.property,
    [SyntaxKind.SetAccessor]: TokenType.property,
    [SyntaxKind.PropertySignature]: TokenType.property,
    [SyntaxKind.InterfaceDeclaration]: TokenType.interface,
    [SyntaxKind.TypeAliasDeclaration]: TokenType.type,
    [SyntaxKind.TypeParameter]: TokenType.typeParameter,
    [SyntaxKind.PropertyAssignment]: TokenType.property,
    [SyntaxKind.ShorthandPropertyAssignment]: TokenType.property
  };
}
