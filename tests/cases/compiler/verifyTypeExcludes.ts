// @typesExclude: domish
// @typeRoots: /.src/tests/cases/compiler/types/
// @moduleResolution: node
// @lib: es2017, dom

// @filename: types/domish/index.d.ts
interface FormData {
  append(name: string, value: string | Blob, fileName?: string): void;
  delete(name: string): void;
  get(name: string): FormDataEntryValue | null;
  getAll(name: string): FormDataEntryValue[];
  has(name: string): boolean;
  set(name: string, value: string | Blob, fileName?: string): void;
  forEach(callbackfn: (value: FormDataEntryValue, key: string, parent: FormData) => void, thisArg?: any): void;
}

declare var FormData: {
  prototype: FormData;
  new(form?: HTMLFormElement): FormData;
};
 

// @filename: index.ts
const form = new FormData()
