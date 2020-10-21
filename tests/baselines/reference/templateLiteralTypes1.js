//// [templateLiteralTypes1.ts]
// Template types example from #12754

const createScopedActionType = <S extends string>(scope: S) => <T extends string>(type: T) => `${scope}/${type}` as `${S}/${T}`;
const createActionInMyScope = createScopedActionType("MyScope");  // <T extends string>(type: T) => `MyScope/${T}`
const MY_ACTION = createActionInMyScope("MY_ACTION");  // 'MyScope/MY_ACTION'

// Union types are distributed over template types

type EventName<S extends string> = `${S}Changed`;
type EN1 = EventName<'Foo' | 'Bar' | 'Baz'>;
type Loc = `${'top' | 'middle' | 'bottom'}-${'left' | 'center' | 'right'}`;

// Primitive literal types can be spread into templates

type ToString<T extends string | number | boolean | bigint> = `${T}`;
type TS1 = ToString<'abc' | 42 | true | -1234n>;

// Casing modifiers

type Cases<T extends string> = `${uppercase T} ${lowercase T} ${capitalize T} ${uncapitalize T}`;

type TCA1 = Cases<'bar'>;  // 'BAR bar Bar bar'
type TCA2 = Cases<'BAR'>;  // 'BAR bar BAR bAR'

// Assignability

function test<T extends 'foo' | 'bar'>(name: `get${capitalize T}`) {
    let s1: string = name;
    let s2: 'getFoo' | 'getBar' = name;
}

function fa1<T>(x: T, y: { [P in keyof T]: T[P] }, z: { [P in keyof T & string as `p_${P}`]: T[P] }) {
    y = x;
    z = x;  // Error
}

function fa2<T, U extends T, A extends string, B extends A>(x: { [P in B as `p_${P}`]: T }, y: { [Q in A as `p_${Q}`]: U }) {
    x = y;
    y = x;  // Error
}

// String transformations using recursive conditional types

type Join<T extends unknown[], D extends string> =
    T extends [] ? '' :
    T extends [string | number | boolean | bigint] ? `${T[0]}` :
    T extends [string | number | boolean | bigint, ...infer U] ? `${T[0]}${D}${Join<U, D>}` :
    string;

type TJ1 = Join<[1, 2, 3, 4], '.'>
type TJ2 = Join<['foo', 'bar', 'baz'], '-'>;
type TJ3 = Join<[], '.'>

// Inference based on delimiters

type MatchPair<S extends string> = S extends `[${infer A},${infer B}]` ? [A, B] : unknown;

type T20 = MatchPair<'[1,2]'>;  // ['1', '2']
type T21 = MatchPair<'[foo,bar]'>;  // ['foo', 'bar']
type T22 = MatchPair<' [1,2]'>;  // unknown
type T23 = MatchPair<'[123]'>;  // unknown
type T24 = MatchPair<'[1,2,3,4]'>;  // ['1', '2,3,4']

type SnakeToCamelCase<S extends string> =
    S extends `${infer T}_${infer U}` ? `${lowercase T}${SnakeToPascalCase<U>}` :
    S extends `${infer T}` ? `${lowercase T}` :
    SnakeToPascalCase<S>;

type SnakeToPascalCase<S extends string> =
    string extends S ? string :
    S extends `${infer T}_${infer U}` ? `${capitalize `${lowercase T}`}${SnakeToPascalCase<U>}` :
    S extends `${infer T}` ? `${capitalize `${lowercase T}`}` :
    never;

type RR0 = SnakeToPascalCase<'hello_world_foo'>;  // 'HelloWorldFoo'
type RR1 = SnakeToPascalCase<'FOO_BAR_BAZ'>;  // 'FooBarBaz'
type RR2 = SnakeToCamelCase<'hello_world_foo'>;  // 'helloWorldFoo'
type RR3 = SnakeToCamelCase<'FOO_BAR_BAZ'>;  // 'fooBarBaz'

// Single character inference

type FirstTwoAndRest<S extends string> = S extends `${infer A}${infer B}${infer R}` ? [`${A}${B}`, R] : unknown;

type T25 = FirstTwoAndRest<'abcde'>;  // ['ab', 'cde']
type T26 = FirstTwoAndRest<'ab'>;  // ['ab', '']
type T27 = FirstTwoAndRest<'a'>;  // unknown

type Capitalize<S extends string> = S extends `${infer H}${infer T}` ? `${uppercase H}${T}` : S;
type Uncapitalize<S extends string> = S extends `${infer H}${infer T}` ? `${lowercase H}${T}` : S;

type TC1 = Capitalize<'foo'>;  // 'Foo'
type TC2 = Uncapitalize<'Foo'>;  // 'foo'

type HexDigit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' |'8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'a' | 'b' | 'c' | 'd' | 'e' | 'f';

type HexColor<S extends string> =
    S extends `#${infer R1}${infer R2}${infer G1}${infer G2}${infer B1}${infer B2}` ?
        [R1, R2, G1, G2, B1, B2] extends [HexDigit, HexDigit, HexDigit, HexDigit, HexDigit, HexDigit] ?
            S :
            never :
        never;

type TH1 = HexColor<'#8080FF'>;  // '#8080FF'
type TH2 = HexColor<'#80c0ff'>;  // '#80c0ff'
type TH3 = HexColor<'#8080F'>;  // never
type TH4 = HexColor<'#8080FFF'>;  // never

// Recursive inference

type Trim<S extends string> =
    S extends ` ${infer T}` ? Trim<T> :
    S extends `${infer T} ` ? Trim<T> :
    S;

type TR1 = Trim<'xx   '>;  // 'xx'
type TR2 = Trim<'   xx'>;  // 'xx'
type TR3 = Trim<'   xx   '>;  // 'xx'

type Split<S extends string, D extends string> =
    string extends S ? string[] :
    S extends '' ? [] :
    S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>] :
    [S];

type T40 = Split<'foo', '.'>;  // ['foo']
type T41 = Split<'foo.bar.baz', '.'>;  // ['foo', 'bar', 'baz']
type T42 = Split<'foo.bar', ''>;  // ['f', 'o', 'o', '.', 'b', 'a', 'r']
type T43 = Split<any, '.'>;  // string[]

// Inference and property name paths

declare function getProp<T, P0 extends keyof T & string, P1 extends keyof T[P0] & string, P2 extends keyof T[P0][P1] & string>(obj: T, path: `${P0}.${P1}.${P2}`): T[P0][P1][P2];
declare function getProp<T, P0 extends keyof T & string, P1 extends keyof T[P0] & string>(obj: T, path: `${P0}.${P1}`): T[P0][P1];
declare function getProp<T, P0 extends keyof T & string>(obj: T, path: P0): T[P0];
declare function getProp(obj: object, path: string): unknown;

let p1 = getProp({ a: { b: {c: 42, d: 'hello' }}} as const, 'a');
let p2 = getProp({ a: { b: {c: 42, d: 'hello' }}} as const, 'a.b');
let p3 = getProp({ a: { b: {c: 42, d: 'hello' }}} as const, 'a.b.d');

type PropType<T, Path extends string> =
    string extends Path ? unknown :
    Path extends keyof T ? T[Path] :
    Path extends `${infer K}.${infer R}` ? K extends keyof T ? PropType<T[K], R> : unknown :
    unknown;

declare function getPropValue<T, P extends string>(obj: T, path: P): PropType<T, P>;
declare const s: string;

const obj = { a: { b: {c: 42, d: 'hello' }}};

getPropValue(obj, 'a');  // { b: {c: number, d: string } }
getPropValue(obj, 'a.b');  // {c: number, d: string }
getPropValue(obj, 'a.b.d');  // string
getPropValue(obj, 'a.b.x');  // unknown
getPropValue(obj, s);  // unknown

// Infer type variables in template literals have string constraint

type S1<T> = T extends `foo${infer U}bar` ? S2<U> : never;
type S2<S extends string> = S;

// Check that infer T declarations are validated

type TV1 = `${infer X}`;

// Batched single character inferences for lower recursion depth

type Chars<S extends string> =
    string extends S ? string[] :
    S extends `${infer C0}${infer C1}${infer C2}${infer C3}${infer C4}${infer C5}${infer C6}${infer C7}${infer C8}${infer C9}${infer R}` ? [C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, ...Chars<R>] :
    S extends `${infer C}${infer R}` ? [C, ...Chars<R>] :
    S extends '' ? [] :
    never;

type L1 = Chars<'FooBarBazThisIsALongerString'>;  // ['F', 'o', 'o', 'B', 'a', 'r', ...]

// Infer never when source isn't a literal type that matches the pattern

type Foo<T> = T extends `*${infer S}*` ? S : never;

type TF1 = Foo<any>;      // never
type TF2 = Foo<string>;   // never
type TF3 = Foo<'abc'>;    // never
type TF4 = Foo<'*abc*'>;  // 'abc'

// Cross product unions limited to 100,000 constituents

type A = any;

type U1 = {a1:A} | {b1:A} | {c1:A} | {d1:A} | {e1:A} | {f1:A} | {g1:A} | {h1:A} | {i1:A} | {j1:A};
type U2 = {a2:A} | {b2:A} | {c2:A} | {d2:A} | {e2:A} | {f2:A} | {g2:A} | {h2:A} | {i2:A} | {j2:A};
type U3 = {a3:A} | {b3:A} | {c3:A} | {d3:A} | {e3:A} | {f3:A} | {g3:A} | {h3:A} | {i3:A} | {j3:A};
type U4 = {a4:A} | {b4:A} | {c4:A} | {d4:A} | {e4:A} | {f4:A} | {g4:A} | {h4:A} | {i4:A} | {j4:A};
type U5 = {a5:A} | {b5:A} | {c5:A} | {d5:A} | {e5:A} | {f5:A} | {g5:A} | {h5:A} | {i5:A} | {j5:A};

type U100000 = U1 & U2 & U3 & U4 & U5;  // Error

type Digits = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type D100000 = `${Digits}${Digits}${Digits}${Digits}${Digits}`;  // Error

type TDigits = [0] | [1] | [2] | [3] | [4] | [5] | [6] | [7] | [8] | [9];

type T100000 = [...TDigits, ...TDigits, ...TDigits, ...TDigits, ...TDigits];  // Error


//// [templateLiteralTypes1.js]
"use strict";
// Template types example from #12754
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var createScopedActionType = function (scope) { return function (type) { return scope + "/" + type; }; };
var createActionInMyScope = createScopedActionType("MyScope"); // <T extends string>(type: T) => `MyScope/${T}`
var MY_ACTION = createActionInMyScope("MY_ACTION"); // 'MyScope/MY_ACTION'














T;$;{lowercase;T;}$;{capitalize;T;}$;{uncapitalize;T;}";\n\ntype TCA1 = Cases<'bar'>;  // 'BAR bar Bar bar'\ntype TCA2 = Cases<'BAR'>;  // 'BAR bar BAR bAR'\n\n// Assignability\n\nfunction test<T extends 'foo' | 'bar'>(name: ";get$;{capitalize;T;}") {\n    let s1: string = name;\n    let s2: 'getFoo' | 'getBar' = name;\n}\n\nfunction fa1<T>(x: T, y: { [P in keyof T]: T[P] }, z: { [P in keyof T & string as ";p_$;{P;}"]: T[P] }) {\n    y = x;\n    z = x;  // Error\n}\n\nfunction fa2<T, U extends T, A extends string, B extends A>(x: { [P in B as ";p_$;{P;}"]: T }, y: { [Q in A as ";p_$;{Q;}"]: U }) {\n    x = y;\n    y = x;  // Error\n}\n\n// String transformations using recursive conditional types\n\ntype Join<T extends unknown[], D extends string> =\n    T extends [] ? '' :\n    T extends [string | number | boolean | bigint] ? ";$;{T[0];}" :\n    T extends [string | number | boolean | bigint, ...infer U] ? ";$;{T[0];}$;{D;}$;{Join();}" :\n    string;\n\ntype TJ1 = Join<[1, 2, 3, 4], '.'>\ntype TJ2 = Join<['foo', 'bar', 'baz'], '-'>;\ntype TJ3 = Join<[], '.'>\n\n// Inference based on delimiters\n\ntype MatchPair<S extends string> = S extends "[$];{infer;A;}$;{infer;B;}" ? [A, B] : unknown;\n\ntype T20 = MatchPair<'[1,2]'>;  // ['1', '2']\ntype T21 = MatchPair<'[foo,bar]'>;  // ['foo', 'bar']\ntype T22 = MatchPair<' [1,2]'>;  // unknown\ntype T23 = MatchPair<'[123]'>;  // unknown\ntype T24 = MatchPair<'[1,2,3,4]'>;  // ['1', '2,3,4']\n\ntype SnakeToCamelCase<S extends string> =\n    S extends ";$;{infer;T;}_$;{infer;U;}" ? ";$;{lowercase;T;}$;{SnakeToPascalCase();}" :\n    S extends ";$;{infer;T;}" ? ";$;{lowercase;T;}" :\n    SnakeToPascalCase<S>;\n\ntype SnakeToPascalCase<S extends string> =\n    string extends S ? string :\n    S extends ";$;{infer;T;}_$;{infer;U;}" ? ";$;{capitalize(__makeTemplateObject(["", ""], ["", ""]), lowercase);T;
}"}" + SnakeToPascalCase(" :\n    S extends ", $, { infer: infer, T: T }(__makeTemplateObject([" ? "], [" ? "])), $, { capitalize: capitalize }(__makeTemplateObject(["", ""], ["", ""]), lowercase), T, "}", never);














$;{T;}" : S;\ntype Uncapitalize<S extends string> = S extends ";$;{infer;H;}$;{infer;T;}" ? ";$;{lowercase;H;}$;{T;}" : S;\n\ntype TC1 = Capitalize<'foo'>;  // 'Foo'\ntype TC2 = Uncapitalize<'Foo'>;  // 'foo'\n\ntype HexDigit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' |'8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'a' | 'b' | 'c' | 'd' | 'e' | 'f';\n\ntype HexColor<S extends string> =\n    S extends ";#$;{infer;R1;}$;{infer;R2;}$;{infer;G1;}$;{infer;G2;}$;{infer;B1;}$;{infer;B2;}" ?\n        [R1, R2, G1, G2, B1, B2] extends [HexDigit, HexDigit, HexDigit, HexDigit, HexDigit, HexDigit] ?\n            S :\n            never :\n        never;\n\ntype TH1 = HexColor<'#8080FF'>;  // '#8080FF'\ntype TH2 = HexColor<'#80c0ff'>;  // '#80c0ff'\ntype TH3 = HexColor<'#8080F'>;  // never\ntype TH4 = HexColor<'#8080FFF'>;  // never\n\n// Recursive inference\n\ntype Trim<S extends string> =\n    S extends ";$;{infer;T;}" ? Trim<T> :\n    S extends ";$;{infer;T;}" ? Trim<T> :\n    S;\n\ntype TR1 = Trim<'xx   '>;  // 'xx'\ntype TR2 = Trim<'   xx'>;  // 'xx'\ntype TR3 = Trim<'   xx   '>;  // 'xx'\n\ntype Split<S extends string, D extends string> =\n    string extends S ? string[] :\n    S extends '' ? [] :\n    S extends ";$;{infer;T;}$;{D;}$;{infer;U;}" ? [T, ...Split<U, D>] :\n    [S];\n\ntype T40 = Split<'foo', '.'>;  // ['foo']\ntype T41 = Split<'foo.bar.baz', '.'>;  // ['foo', 'bar', 'baz']\ntype T42 = Split<'foo.bar', ''>;  // ['f', 'o', 'o', '.', 'b', 'a', 'r']\ntype T43 = Split<any, '.'>;  // string[]\n\n// Inference and property name paths\n\ndeclare function getProp<T, P0 extends keyof T & string, P1 extends keyof T[P0] & string, P2 extends keyof T[P0][P1] & string>(obj: T, path: ";$;{P0;}$;{P1;}$;{P2;}"): T[P0][P1][P2];\ndeclare function getProp<T, P0 extends keyof T & string, P1 extends keyof T[P0] & string>(obj: T, path: ";$;{P0;}$;{P1;}"): T[P0][P1];\ndeclare function getProp<T, P0 extends keyof T & string>(obj: T, path: P0): T[P0];\ndeclare function getProp(obj: object, path: string): unknown;\n\nlet p1 = getProp({ a: { b: {c: 42, d: 'hello' }}} as const, 'a');\nlet p2 = getProp({ a: { b: {c: 42, d: 'hello' }}} as const, 'a.b');\nlet p3 = getProp({ a: { b: {c: 42, d: 'hello' }}} as const, 'a.b.d');\n\ntype PropType<T, Path extends string> =\n    string extends Path ? unknown :\n    Path extends keyof T ? T[Path] :\n    Path extends ";$;{infer;K;}$;{infer;R;}" ? K extends keyof T ? PropType<T[K], R> : unknown :\n    unknown;\n\ndeclare function getPropValue<T, P extends string>(obj: T, path: P): PropType<T, P>;\ndeclare const s: string;\n\nconst obj = { a: { b: {c: 42, d: 'hello' }}};\n\ngetPropValue(obj, 'a');  // { b: {c: number, d: string } }\ngetPropValue(obj, 'a.b');  // {c: number, d: string }\ngetPropValue(obj, 'a.b.d');  // string\ngetPropValue(obj, 'a.b.x');  // unknown\ngetPropValue(obj, s);  // unknown\n\n// Infer type variables in template literals have string constraint\n\ntype S1<T> = T extends ";foo$;{infer;U;}bar(__makeTemplateObject([" ? S2<U> : never;\ntype S2<S extends string> = S;\n\n// Check that infer T declarations are validated\n\ntype TV1 = "], [" ? S2<U> : never;\ntype S2<S extends string> = S;\n\n// Check that infer T declarations are validated\n\ntype TV1 = "]));$;{infer;X;}";\n\n// Batched single character inferences for lower recursion depth\n\ntype Chars<S extends string> =\n    string extends S ? string[] :\n    S extends ";$;{infer;C0;}$;{infer;C1;}$;{infer;C2;}$;{infer;C3;}$;{infer;C4;}$;{infer;C5;}$;{infer;C6;}$;{infer;C7;}$;{infer;C8;}$;{infer;C9;}$;{infer;R;}" ? [C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, ...Chars<R>] :\n    S extends ";$;{infer;C;}$;{infer;R;}" ? [C, ...Chars<R>] :\n    S extends '' ? [] :\n    never;\n\ntype L1 = Chars<'FooBarBazThisIsALongerString'>;  // ['F', 'o', 'o', 'B', 'a', 'r', ...]\n\n// Infer never when source isn't a literal type that matches the pattern\n\ntype Foo<T> = T extends " * $;{infer;S;} * " ? S : never;\n\ntype TF1 = Foo<any>;      // never\ntype TF2 = Foo<string>;   // never\ntype TF3 = Foo<'abc'>;    // never\ntype TF4 = Foo<'*abc*'>;  // 'abc'\n\n// Cross product unions limited to 100,000 constituents\n\ntype A = any;\n\ntype U1 = {a1:A} | {b1:A} | {c1:A} | {d1:A} | {e1:A} | {f1:A} | {g1:A} | {h1:A} | {i1:A} | {j1:A};\ntype U2 = {a2:A} | {b2:A} | {c2:A} | {d2:A} | {e2:A} | {f2:A} | {g2:A} | {h2:A} | {i2:A} | {j2:A};\ntype U3 = {a3:A} | {b3:A} | {c3:A} | {d3:A} | {e3:A} | {f3:A} | {g3:A} | {h3:A} | {i3:A} | {j3:A};\ntype U4 = {a4:A} | {b4:A} | {c4:A} | {d4:A} | {e4:A} | {f4:A} | {g4:A} | {h4:A} | {i4:A} | {j4:A};\ntype U5 = {a5:A} | {b5:A} | {c5:A} | {d5:A} | {e5:A} | {f5:A} | {g5:A} | {h5:A} | {i5:A} | {j5:A};\n\ntype U100000 = U1 & U2 & U3 & U4 & U5;  // Error\n\ntype Digits = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;\n\ntype D100000 = ";$;{Digits;}$;{Digits;}$;{Digits;}$;{Digits;}$;{Digits;}";  // Error\n\ntype TDigits = [0] | [1] | [2] | [3] | [4] | [5] | [6] | [7] | [8] | [9];\n\ntype T100000 = [...TDigits, ...TDigits, ...TDigits, ...TDigits, ...TDigits];  // Error\n";
