//// [/lib/initial-buildOutput.txt]
/lib/tsc -p src/pkg3 --listFiles
src/pkg3/src/keys.ts(2,14): error TS2742: The inferred type of 'ADMIN' cannot be named without a reference to '@raymondfeng/pkg2/node_modules/@raymondfeng/pkg1'. This is likely not portable. A type annotation is necessary.
/lib/lib.d.ts
/src/pkg3/node_modules/@raymondfeng/pkg2/node_modules/@raymondfeng/pkg1/dist/types.d.ts
/src/pkg3/node_modules/@raymondfeng/pkg2/node_modules/@raymondfeng/pkg1/dist/index.d.ts
/src/pkg3/node_modules/@raymondfeng/pkg2/dist/types.d.ts
/src/pkg3/node_modules/@raymondfeng/pkg2/dist/index.d.ts
/src/pkg3/src/keys.ts
/src/pkg3/src/index.ts
exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped


//// [/src/pkg3/dist/index.d.ts]
export * from './keys';


//// [/src/pkg3/dist/index.js]
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./keys"), exports);


//// [/src/pkg3/dist/keys.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pkg2_1 = require("@raymondfeng/pkg2");
exports.ADMIN = pkg2_1.MetadataAccessor.create('1');


