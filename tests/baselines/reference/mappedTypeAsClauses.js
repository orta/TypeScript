//// [mappedTypeAsClauses.ts]
// Mapped type 'as N' clauses

type Getters<T> = { [P in keyof T & string as `get${capitalize P}`]: () => T[P] };
type TG1 = Getters<{ foo: string, bar: number, baz: { z: boolean } }>;

// Mapped type with 'as N' clause has no constraint on 'in T' clause

type PropDef<K extends keyof any, T> = { name: K, type: T };

type TypeFromDefs<T extends PropDef<keyof any, any>> = { [P in T as P['name']]: P['type'] };

type TP1 = TypeFromDefs<{ name: 'a', type: string } | { name: 'b', type: number } | { name: 'a', type: boolean }>;

// No array or tuple type mapping when 'as N' clause present

type TA1 = Getters<string[]>;
type TA2 = Getters<[number, boolean]>;

// Filtering using 'as N' clause

type Methods<T> = { [P in keyof T as T[P] extends Function ? P : never]: T[P] };
type TM1 = Methods<{ foo(): number, bar(x: string): boolean, baz: string | number }>;

// Mapping to multiple names using 'as N' clause

type DoubleProp<T> = { [P in keyof T & string as `${P}1` | `${P}2`]: T[P] }
type TD1 = DoubleProp<{ a: string, b: number }>;  // { a1: string, a2: string, b1: number, b2: number }
type TD2 = keyof TD1;  // 'a1' | 'a2' | 'b1' | 'b2'
type TD3<U> = keyof DoubleProp<U>;  // `${keyof U & string}1` | `${keyof U & string}2`


//// [mappedTypeAsClauses.js]
"use strict";
// Mapped type 'as N' clauses
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
P;"]: () => T[P] };\ntype TG1 = Getters<{ foo: string, bar: number, baz: { z: boolean } }>;\n\n// Mapped type with 'as N' clause has no constraint on 'in T' clause\n\ntype PropDef<K extends keyof any, T> = { name: K, type: T };\n\ntype TypeFromDefs<T extends PropDef<keyof any, any>> = { [P in T as P['name']]: P['type'] };\n\ntype TP1 = TypeFromDefs<{ name: 'a', type: string } | { name: 'b', type: number } | { name: 'a', type: boolean }>;\n\n// No array or tuple type mapping when 'as N' clause present\n\ntype TA1 = Getters<string[]>;\ntype TA2 = Getters<[number, boolean]>;\n\n// Filtering using 'as N' clause\n\ntype Methods<T> = { [P in keyof T as T[P] extends Function ? P : never]: T[P] };\ntype TM1 = Methods<{ foo(): number, bar(x: string): boolean, baz: string | number }>;\n\n// Mapping to multiple names using 'as N' clause\n\ntype DoubleProp<T> = { [P in keyof T & string as ";$;{P;}1(__makeTemplateObject([" | "], [" | "]));$;{P;}2(__makeTemplateObject(["]: T[P] }\ntype TD1 = DoubleProp<{ a: string, b: number }>;  // { a1: string, a2: string, b1: number, b2: number }\ntype TD2 = keyof TD1;  // 'a1' | 'a2' | 'b1' | 'b2'\ntype TD3<U> = keyof DoubleProp<U>;  // "], ["]: T[P] }\ntype TD1 = DoubleProp<{ a: string, b: number }>;  // { a1: string, a2: string, b1: number, b2: number }\ntype TD2 = keyof TD1;  // 'a1' | 'a2' | 'b1' | 'b2'\ntype TD3<U> = keyof DoubleProp<U>;  // "]));$;{keyof;U & string;}1(__makeTemplateObject([" | "], [" | "]));$;{keyof;U & string;}2(__makeTemplateObject(["\n"], ["\n"]));
