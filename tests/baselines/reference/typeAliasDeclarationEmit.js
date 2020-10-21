//// [typeAliasDeclarationEmit.ts]
export type callback<T> = () => T;

export type CallbackArray<T extends callback> = () => T;

//// [typeAliasDeclarationEmit.js]
define(["require", "exports"], function (require, exports) {
    "use strict";Object.defineProperty(exports, "__esModule", { value: true });
});


//// [typeAliasDeclarationEmit.d.ts]
export declare type callback<T> = () => T;
export declare type CallbackArray<T extends callback> = () => T;
