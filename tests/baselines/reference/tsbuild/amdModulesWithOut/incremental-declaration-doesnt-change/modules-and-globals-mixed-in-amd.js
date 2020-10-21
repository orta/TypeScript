Input::
//// [/src/lib/file1.ts]
export const x = 10;console.log(x);



Output::
/lib/tsc --b /src/app --verbose
[[90m12:04:00 AM[0m] Projects in this build: 
    * src/lib/tsconfig.json
    * src/app/tsconfig.json

[[90m12:04:00 AM[0m] Project 'src/lib/tsconfig.json' is out of date because oldest output 'src/lib/module.js' is older than newest input 'src/lib/file1.ts'

[[90m12:04:00 AM[0m] Building project '/src/lib/tsconfig.json'...

[[90m12:04:00 AM[0m] Project 'src/app/tsconfig.json' is out of date because output of its dependency 'src/lib' has changed

[[90m12:04:00 AM[0m] Updating output of project '/src/app/tsconfig.json'...

[[90m12:04:00 AM[0m] Updating unchanged output timestamps of project '/src/app/tsconfig.json'...

exitCode:: ExitStatus.Success


//// [/src/app/module.js]
var myGlob = 20;
define("file1", ["require", "exports"], function (require, exports) {
    "use strict";Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = void 0;
    exports.x = 10;console.log(exports.x);
});
define("file2", ["require", "exports"], function (require, exports) {
    "use strict";Object.defineProperty(exports, "__esModule", { value: true });
    exports.y = void 0;
    exports.y = 20;
});
var globalConst = 10;
define("file3", ["require", "exports"], function (require, exports) {
    "use strict";Object.defineProperty(exports, "__esModule", { value: true });
    exports.z = void 0;
    exports.z = 30;
});
var myVar = 30;
//# sourceMappingURL=module.js.map

//// [/src/app/module.js.map]
{"version":3,"file":"module.js","sourceRoot":"","sources":["../lib/file0.ts","../lib/file1.ts","../lib/file2.ts","../lib/global.ts","file3.ts","file4.ts"],"names":[],"mappings":"AAAA,IAAM,MAAM,GAAG,EAAE,CAAC;;;;ICAL,QAAA,CAAC,GAAG,EAAE,CAAC,OAAO,CAAC,GAAG,CAAC,SAAC,CAAC,CAAC;;;;;ICAtB,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,WAAW,GAAG,EAAE,CAAC;;;;ICAV,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,KAAK,GAAG,EAAE,CAAC"}

//// [/src/app/module.js.map.baseline.txt]
===================================================================
JsFile: module.js
mapUrl: module.js.map
sourceRoot: 
sources: ../lib/file0.ts,../lib/file1.ts,../lib/file2.ts,../lib/global.ts,file3.ts,file4.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:../lib/file0.ts
-------------------------------------------------------------------
>>>var myGlob = 20;
1 >
2 >^^^^
3 >    ^^^^^^
4 >          ^^^
5 >             ^^
6 >               ^
7 >                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >const 
3 >    myGlob
4 >           = 
5 >             20
6 >               ;
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 5) Source(1, 7) + SourceIndex(0)
3 >Emitted(1, 11) Source(1, 13) + SourceIndex(0)
4 >Emitted(1, 14) Source(1, 16) + SourceIndex(0)
5 >Emitted(1, 16) Source(1, 18) + SourceIndex(0)
6 >Emitted(1, 17) Source(1, 19) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:../lib/file1.ts
-------------------------------------------------------------------
>>>define("file1", ["require", "exports"], function (require, exports) {
>>>    "use strict";Object.defineProperty(exports, "__esModule", { value: true });
>>>    exports.x = void 0;
>>>    exports.x = 10;console.log(exports.x);
1->^^^^
2 >    ^^^^^^^^
3 >            ^
4 >             ^^^
5 >                ^^
6 >                  ^
7 >                   ^^^^^^^
8 >                          ^
9 >                           ^^^
10>                              ^
11>                               ^^^^^^^^^
12>                                        ^
13>                                         ^
1->export const 
2 >    
3 >            x
4 >              = 
5 >                10
6 >                  ;
7 >                   console
8 >                          .
9 >                           log
10>                              (
11>                               x
12>                                        )
13>                                         ;
1->Emitted(5, 5) Source(1, 14) + SourceIndex(1)
2 >Emitted(5, 13) Source(1, 14) + SourceIndex(1)
3 >Emitted(5, 14) Source(1, 15) + SourceIndex(1)
4 >Emitted(5, 17) Source(1, 18) + SourceIndex(1)
5 >Emitted(5, 19) Source(1, 20) + SourceIndex(1)
6 >Emitted(5, 20) Source(1, 21) + SourceIndex(1)
7 >Emitted(5, 27) Source(1, 28) + SourceIndex(1)
8 >Emitted(5, 28) Source(1, 29) + SourceIndex(1)
9 >Emitted(5, 31) Source(1, 32) + SourceIndex(1)
10>Emitted(5, 32) Source(1, 33) + SourceIndex(1)
11>Emitted(5, 41) Source(1, 34) + SourceIndex(1)
12>Emitted(5, 42) Source(1, 35) + SourceIndex(1)
13>Emitted(5, 43) Source(1, 36) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:../lib/file2.ts
-------------------------------------------------------------------
>>>});
>>>define("file2", ["require", "exports"], function (require, exports) {
>>>    "use strict";Object.defineProperty(exports, "__esModule", { value: true });
>>>    exports.y = void 0;
>>>    exports.y = 20;
1 >^^^^
2 >    ^^^^^^^^
3 >            ^
4 >             ^^^
5 >                ^^
6 >                  ^
1 >export const 
2 >    
3 >            y
4 >              = 
5 >                20
6 >                  ;
1 >Emitted(10, 5) Source(1, 14) + SourceIndex(2)
2 >Emitted(10, 13) Source(1, 14) + SourceIndex(2)
3 >Emitted(10, 14) Source(1, 15) + SourceIndex(2)
4 >Emitted(10, 17) Source(1, 18) + SourceIndex(2)
5 >Emitted(10, 19) Source(1, 20) + SourceIndex(2)
6 >Emitted(10, 20) Source(1, 21) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:../lib/global.ts
-------------------------------------------------------------------
>>>});
>>>var globalConst = 10;
1 >
2 >^^^^
3 >    ^^^^^^^^^^^
4 >               ^^^
5 >                  ^^
6 >                    ^
7 >                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >const 
3 >    globalConst
4 >                = 
5 >                  10
6 >                    ;
1 >Emitted(12, 1) Source(1, 1) + SourceIndex(3)
2 >Emitted(12, 5) Source(1, 7) + SourceIndex(3)
3 >Emitted(12, 16) Source(1, 18) + SourceIndex(3)
4 >Emitted(12, 19) Source(1, 21) + SourceIndex(3)
5 >Emitted(12, 21) Source(1, 23) + SourceIndex(3)
6 >Emitted(12, 22) Source(1, 24) + SourceIndex(3)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:file3.ts
-------------------------------------------------------------------
>>>define("file3", ["require", "exports"], function (require, exports) {
>>>    "use strict";Object.defineProperty(exports, "__esModule", { value: true });
>>>    exports.z = void 0;
>>>    exports.z = 30;
1->^^^^
2 >    ^^^^^^^^
3 >            ^
4 >             ^^^
5 >                ^^
6 >                  ^
1->export const 
2 >    
3 >            z
4 >              = 
5 >                30
6 >                  ;
1->Emitted(16, 5) Source(1, 14) + SourceIndex(4)
2 >Emitted(16, 13) Source(1, 14) + SourceIndex(4)
3 >Emitted(16, 14) Source(1, 15) + SourceIndex(4)
4 >Emitted(16, 17) Source(1, 18) + SourceIndex(4)
5 >Emitted(16, 19) Source(1, 20) + SourceIndex(4)
6 >Emitted(16, 20) Source(1, 21) + SourceIndex(4)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:file4.ts
-------------------------------------------------------------------
>>>});
>>>var myVar = 30;
1 >
2 >^^^^
3 >    ^^^^^
4 >         ^^^
5 >            ^^
6 >              ^
7 >               ^^^^^^^^^^^^^^^^^^->
1 >
2 >const 
3 >    myVar
4 >          = 
5 >            30
6 >              ;
1 >Emitted(18, 1) Source(1, 1) + SourceIndex(5)
2 >Emitted(18, 5) Source(1, 7) + SourceIndex(5)
3 >Emitted(18, 10) Source(1, 12) + SourceIndex(5)
4 >Emitted(18, 13) Source(1, 15) + SourceIndex(5)
5 >Emitted(18, 15) Source(1, 17) + SourceIndex(5)
6 >Emitted(18, 16) Source(1, 18) + SourceIndex(5)
---
>>>//# sourceMappingURL=module.js.map

//// [/src/app/module.tsbuildinfo]
{
  "bundle": {
    "commonSourceDirectory": "./",
    "sourceFiles": [
      "./file3.ts",
      "./file4.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 468,
          "kind": "prepend",
          "data": "../lib/module.js",
          "texts": [
            {
              "pos": 0,
              "end": 468,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 470,
          "end": 688,
          "kind": "text"
        }
      ]
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 171,
          "kind": "prepend",
          "data": "../lib/module.d.ts",
          "texts": [
            {
              "pos": 0,
              "end": 171,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 171,
          "end": 253,
          "kind": "text"
        }
      ]
    }
  },
  "version": "FakeTSVersion"
}

//// [/src/app/module.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/app/module.js
----------------------------------------------------------------------
prepend: (0-468):: ../lib/module.js texts:: 1
>>--------------------------------------------------------------------
text: (0-468)
var myGlob = 20;
define("file1", ["require", "exports"], function (require, exports) {
    "use strict";Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = void 0;
    exports.x = 10;console.log(exports.x);
});
define("file2", ["require", "exports"], function (require, exports) {
    "use strict";Object.defineProperty(exports, "__esModule", { value: true });
    exports.y = void 0;
    exports.y = 20;
});
var globalConst = 10;
----------------------------------------------------------------------
text: (470-688)
define("file3", ["require", "exports"], function (require, exports) {
    "use strict";Object.defineProperty(exports, "__esModule", { value: true });
    exports.z = void 0;
    exports.z = 30;
});
var myVar = 30;
======================================================================
======================================================================
File:: /src/app/module.d.ts
----------------------------------------------------------------------
prepend: (0-171):: ../lib/module.d.ts texts:: 1
>>--------------------------------------------------------------------
text: (0-171)
declare const myGlob = 20;
declare module "file1" {
    export const x = 10;
}
declare module "file2" {
    export const y = 20;
}
declare const globalConst = 10;

----------------------------------------------------------------------
text: (171-253)
declare module "file3" {
    export const z = 30;
}
declare const myVar = 30;

======================================================================

//// [/src/lib/module.d.ts] file written with same contents
//// [/src/lib/module.d.ts.map] file written with same contents
//// [/src/lib/module.d.ts.map.baseline.txt] file written with same contents
//// [/src/lib/module.js]
var myGlob = 20;
define("file1", ["require", "exports"], function (require, exports) {
    "use strict";Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = void 0;
    exports.x = 10;console.log(exports.x);
});
define("file2", ["require", "exports"], function (require, exports) {
    "use strict";Object.defineProperty(exports, "__esModule", { value: true });
    exports.y = void 0;
    exports.y = 20;
});
var globalConst = 10;
//# sourceMappingURL=module.js.map

//// [/src/lib/module.js.map]
{"version":3,"file":"module.js","sourceRoot":"","sources":["file0.ts","file1.ts","file2.ts","global.ts"],"names":[],"mappings":"AAAA,IAAM,MAAM,GAAG,EAAE,CAAC;;;;ICAL,QAAA,CAAC,GAAG,EAAE,CAAC,OAAO,CAAC,GAAG,CAAC,SAAC,CAAC,CAAC;;;;;ICAtB,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,WAAW,GAAG,EAAE,CAAC"}

//// [/src/lib/module.js.map.baseline.txt]
===================================================================
JsFile: module.js
mapUrl: module.js.map
sourceRoot: 
sources: file0.ts,file1.ts,file2.ts,global.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/lib/module.js
sourceFile:file0.ts
-------------------------------------------------------------------
>>>var myGlob = 20;
1 >
2 >^^^^
3 >    ^^^^^^
4 >          ^^^
5 >             ^^
6 >               ^
7 >                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >const 
3 >    myGlob
4 >           = 
5 >             20
6 >               ;
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 5) Source(1, 7) + SourceIndex(0)
3 >Emitted(1, 11) Source(1, 13) + SourceIndex(0)
4 >Emitted(1, 14) Source(1, 16) + SourceIndex(0)
5 >Emitted(1, 16) Source(1, 18) + SourceIndex(0)
6 >Emitted(1, 17) Source(1, 19) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/lib/module.js
sourceFile:file1.ts
-------------------------------------------------------------------
>>>define("file1", ["require", "exports"], function (require, exports) {
>>>    "use strict";Object.defineProperty(exports, "__esModule", { value: true });
>>>    exports.x = void 0;
>>>    exports.x = 10;console.log(exports.x);
1->^^^^
2 >    ^^^^^^^^
3 >            ^
4 >             ^^^
5 >                ^^
6 >                  ^
7 >                   ^^^^^^^
8 >                          ^
9 >                           ^^^
10>                              ^
11>                               ^^^^^^^^^
12>                                        ^
13>                                         ^
1->export const 
2 >    
3 >            x
4 >              = 
5 >                10
6 >                  ;
7 >                   console
8 >                          .
9 >                           log
10>                              (
11>                               x
12>                                        )
13>                                         ;
1->Emitted(5, 5) Source(1, 14) + SourceIndex(1)
2 >Emitted(5, 13) Source(1, 14) + SourceIndex(1)
3 >Emitted(5, 14) Source(1, 15) + SourceIndex(1)
4 >Emitted(5, 17) Source(1, 18) + SourceIndex(1)
5 >Emitted(5, 19) Source(1, 20) + SourceIndex(1)
6 >Emitted(5, 20) Source(1, 21) + SourceIndex(1)
7 >Emitted(5, 27) Source(1, 28) + SourceIndex(1)
8 >Emitted(5, 28) Source(1, 29) + SourceIndex(1)
9 >Emitted(5, 31) Source(1, 32) + SourceIndex(1)
10>Emitted(5, 32) Source(1, 33) + SourceIndex(1)
11>Emitted(5, 41) Source(1, 34) + SourceIndex(1)
12>Emitted(5, 42) Source(1, 35) + SourceIndex(1)
13>Emitted(5, 43) Source(1, 36) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/lib/module.js
sourceFile:file2.ts
-------------------------------------------------------------------
>>>});
>>>define("file2", ["require", "exports"], function (require, exports) {
>>>    "use strict";Object.defineProperty(exports, "__esModule", { value: true });
>>>    exports.y = void 0;
>>>    exports.y = 20;
1 >^^^^
2 >    ^^^^^^^^
3 >            ^
4 >             ^^^
5 >                ^^
6 >                  ^
1 >export const 
2 >    
3 >            y
4 >              = 
5 >                20
6 >                  ;
1 >Emitted(10, 5) Source(1, 14) + SourceIndex(2)
2 >Emitted(10, 13) Source(1, 14) + SourceIndex(2)
3 >Emitted(10, 14) Source(1, 15) + SourceIndex(2)
4 >Emitted(10, 17) Source(1, 18) + SourceIndex(2)
5 >Emitted(10, 19) Source(1, 20) + SourceIndex(2)
6 >Emitted(10, 20) Source(1, 21) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/lib/module.js
sourceFile:global.ts
-------------------------------------------------------------------
>>>});
>>>var globalConst = 10;
1 >
2 >^^^^
3 >    ^^^^^^^^^^^
4 >               ^^^
5 >                  ^^
6 >                    ^
7 >                     ^^^^^^^^^^^^->
1 >
2 >const 
3 >    globalConst
4 >                = 
5 >                  10
6 >                    ;
1 >Emitted(12, 1) Source(1, 1) + SourceIndex(3)
2 >Emitted(12, 5) Source(1, 7) + SourceIndex(3)
3 >Emitted(12, 16) Source(1, 18) + SourceIndex(3)
4 >Emitted(12, 19) Source(1, 21) + SourceIndex(3)
5 >Emitted(12, 21) Source(1, 23) + SourceIndex(3)
6 >Emitted(12, 22) Source(1, 24) + SourceIndex(3)
---
>>>//# sourceMappingURL=module.js.map

//// [/src/lib/module.tsbuildinfo]
{
  "bundle": {
    "commonSourceDirectory": "./",
    "sourceFiles": [
      "./file0.ts",
      "./file1.ts",
      "./file2.ts",
      "./global.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 468,
          "kind": "text"
        }
      ]
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 171,
          "kind": "text"
        }
      ]
    }
  },
  "version": "FakeTSVersion"
}

//// [/src/lib/module.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/lib/module.js
----------------------------------------------------------------------
text: (0-468)
var myGlob = 20;
define("file1", ["require", "exports"], function (require, exports) {
    "use strict";Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = void 0;
    exports.x = 10;console.log(exports.x);
});
define("file2", ["require", "exports"], function (require, exports) {
    "use strict";Object.defineProperty(exports, "__esModule", { value: true });
    exports.y = void 0;
    exports.y = 20;
});
var globalConst = 10;
======================================================================
======================================================================
File:: /src/lib/module.d.ts
----------------------------------------------------------------------
text: (0-171)
declare const myGlob = 20;
declare module "file1" {
    export const x = 10;
}
declare module "file2" {
    export const y = 20;
}
declare const globalConst = 10;

======================================================================

