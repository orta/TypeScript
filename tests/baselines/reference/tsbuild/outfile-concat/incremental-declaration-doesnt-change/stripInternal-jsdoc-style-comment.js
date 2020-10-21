Input::
//// [/src/first/first_PART1.ts]
/**@internal*/ interface TheFirst {
    none: any;
}

const s = "Hello, world";

interface NoJsForHereEither {
    none: any;
}

console.log(s);
console.log(s);



Output::
/lib/tsc --b /src/third --verbose
[[90m12:04:00 AM[0m] Projects in this build: 
    * src/first/tsconfig.json
    * src/second/tsconfig.json
    * src/third/tsconfig.json

[[90m12:04:00 AM[0m] Project 'src/first/tsconfig.json' is out of date because oldest output 'src/first/bin/first-output.js' is older than newest input 'src/first/first_PART1.ts'

[[90m12:04:00 AM[0m] Building project '/src/first/tsconfig.json'...

[[90m12:04:00 AM[0m] Project 'src/second/tsconfig.json' is up to date because newest input 'src/second/second_part1.ts' is older than oldest output 'src/2/second-output.js'

[[90m12:04:00 AM[0m] Project 'src/third/tsconfig.json' is out of date because output of its dependency 'src/first' has changed

[[90m12:04:00 AM[0m] Updating output of project '/src/third/tsconfig.json'...

[[90m12:04:00 AM[0m] Updating unchanged output timestamps of project '/src/third/tsconfig.json'...

exitCode:: ExitStatus.Success


//// [/src/first/bin/first-output.d.ts] file written with same contents
//// [/src/first/bin/first-output.d.ts.map] file written with same contents
//// [/src/first/bin/first-output.d.ts.map.baseline.txt] file written with same contents
//// [/src/first/bin/first-output.js]

var s = "Hello, world";


console.log(s);
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}
//# sourceMappingURL=first-output.js.map

//// [/src/first/bin/first-output.js.map]
{"version":3,"file":"first-output.js","sourceRoot":"","sources":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"names":[],"mappings":";AAIA,IAAM,CAAC,GAAG,cAAc,CAAC;;;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AACf,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACXf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC"}

//// [/src/first/bin/first-output.js.map.baseline.txt]
===================================================================
JsFile: first-output.js
mapUrl: first-output.js.map
sourceRoot: 
sources: ../first_PART1.ts,../first_part2.ts,../first_part3.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_PART1.ts
-------------------------------------------------------------------
>>>
>>>var s = "Hello, world";
1 >
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^^^^^^^^^^^
6 >                      ^
1 >/**@internal*/ interface TheFirst {
  >    none: any;
  >}
  >
  >
2 >const 
3 >    s
4 >      = 
5 >        "Hello, world"
6 >                      ;
1 >Emitted(2, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(2, 5) Source(5, 7) + SourceIndex(0)
3 >Emitted(2, 6) Source(5, 8) + SourceIndex(0)
4 >Emitted(2, 9) Source(5, 11) + SourceIndex(0)
5 >Emitted(2, 23) Source(5, 25) + SourceIndex(0)
6 >Emitted(2, 24) Source(5, 26) + SourceIndex(0)
---
>>>
>>>
>>>console.log(s);
1 >
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^->
1 >
  >
  >interface NoJsForHereEither {
  >    none: any;
  >}
  >
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1 >Emitted(5, 1) Source(11, 1) + SourceIndex(0)
2 >Emitted(5, 8) Source(11, 8) + SourceIndex(0)
3 >Emitted(5, 9) Source(11, 9) + SourceIndex(0)
4 >Emitted(5, 12) Source(11, 12) + SourceIndex(0)
5 >Emitted(5, 13) Source(11, 13) + SourceIndex(0)
6 >Emitted(5, 14) Source(11, 14) + SourceIndex(0)
7 >Emitted(5, 15) Source(11, 15) + SourceIndex(0)
8 >Emitted(5, 16) Source(11, 16) + SourceIndex(0)
---
>>>console.log(s);
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^^->
1->
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1->Emitted(6, 1) Source(12, 1) + SourceIndex(0)
2 >Emitted(6, 8) Source(12, 8) + SourceIndex(0)
3 >Emitted(6, 9) Source(12, 9) + SourceIndex(0)
4 >Emitted(6, 12) Source(12, 12) + SourceIndex(0)
5 >Emitted(6, 13) Source(12, 13) + SourceIndex(0)
6 >Emitted(6, 14) Source(12, 14) + SourceIndex(0)
7 >Emitted(6, 15) Source(12, 15) + SourceIndex(0)
8 >Emitted(6, 16) Source(12, 16) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_part2.ts
-------------------------------------------------------------------
>>>console.log(f());
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^
1->
2 >console
3 >       .
4 >        log
5 >           (
6 >            f
7 >             ()
8 >               )
9 >                ;
1->Emitted(7, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(7, 8) Source(1, 8) + SourceIndex(1)
3 >Emitted(7, 9) Source(1, 9) + SourceIndex(1)
4 >Emitted(7, 12) Source(1, 12) + SourceIndex(1)
5 >Emitted(7, 13) Source(1, 13) + SourceIndex(1)
6 >Emitted(7, 14) Source(1, 14) + SourceIndex(1)
7 >Emitted(7, 16) Source(1, 16) + SourceIndex(1)
8 >Emitted(7, 17) Source(1, 17) + SourceIndex(1)
9 >Emitted(7, 18) Source(1, 18) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_part3.ts
-------------------------------------------------------------------
>>>function f() {
1 >
2 >^^^^^^^^^
3 >         ^
4 >          ^^^^^^^^^^^^^^^^^^^->
1 >
2 >function 
3 >         f
1 >Emitted(8, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(8, 10) Source(1, 10) + SourceIndex(2)
3 >Emitted(8, 11) Source(1, 11) + SourceIndex(2)
---
>>>    return "JS does hoists";
1->^^^^
2 >    ^^^^^^^
3 >           ^^^^^^^^^^^^^^^^
4 >                           ^
1->() {
  >    
2 >    return 
3 >           "JS does hoists"
4 >                           ;
1->Emitted(9, 5) Source(2, 5) + SourceIndex(2)
2 >Emitted(9, 12) Source(2, 12) + SourceIndex(2)
3 >Emitted(9, 28) Source(2, 28) + SourceIndex(2)
4 >Emitted(9, 29) Source(2, 29) + SourceIndex(2)
---
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
1 >Emitted(10, 1) Source(3, 1) + SourceIndex(2)
2 >Emitted(10, 2) Source(3, 2) + SourceIndex(2)
---
>>>//# sourceMappingURL=first-output.js.map

//// [/src/first/bin/first-output.tsbuildinfo]
{
  "bundle": {
    "commonSourceDirectory": "..",
    "sourceFiles": [
      "../first_PART1.ts",
      "../first_part2.ts",
      "../first_part3.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 133,
          "kind": "text"
        }
      ]
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 39,
          "kind": "internal"
        },
        {
          "pos": 41,
          "end": 157,
          "kind": "text"
        }
      ]
    }
  },
  "version": "FakeTSVersion"
}

//// [/src/first/bin/first-output.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/first/bin/first-output.js
----------------------------------------------------------------------
text: (0-133)

var s = "Hello, world";


console.log(s);
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}

======================================================================
======================================================================
File:: /src/first/bin/first-output.d.ts
----------------------------------------------------------------------
internal: (0-39)
interface TheFirst {
    none: any;
}
----------------------------------------------------------------------
text: (41-157)
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
declare function f(): string;

======================================================================

//// [/src/third/thirdjs/output/third-output.js]

var s = "Hello, world";


console.log(s);
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}
var N;
(function (N) {
    function f() {
        console.log('testing');
    }

    f();
})(N || (N = {}));
var normalC = (function () {
    function normalC() {}

    normalC.prototype.method = function () { };
    Object.defineProperty(normalC.prototype, "c", {
        get: function () { return 10; },
        set: function (val) { },
        enumerable: false,
        configurable: true
    });
    return normalC;
}());
var normalN;
(function (normalN) {
    var C = (function () {
        function C() {}
        return C;
    }());
    normalN.C = C;
    function foo() { }
    normalN.foo = foo;
    var someNamespace;
    (function (someNamespace) {var C = (function () {
            function C() {}
            return C;
        }());
        someNamespace.C = C;
    })(someNamespace = normalN.someNamespace || (normalN.someNamespace = {}));
    var someOther;
    (function (someOther) {var something;
        (function (something) {var someClass = (function () {
                function someClass() {}
                return someClass;
            }());
            something.someClass = someClass;
        })(something = someOther.something || (someOther.something = {}));
    })(someOther = normalN.someOther || (normalN.someOther = {}));
    normalN.someImport = someNamespace.C;

    normalN.internalConst = 10;
    var internalEnum;
    (function (internalEnum) {
        internalEnum[internalEnum["a"] = 0] = "a";
        internalEnum[internalEnum["b"] = 1] = "b";
        internalEnum[internalEnum["c"] = 2] = "c";
    })(internalEnum = normalN.internalEnum || (normalN.internalEnum = {}));
})(normalN || (normalN = {}));
var internalC = (function () {
    function internalC() {}
    return internalC;
}());
function internalfoo() { }
var internalNamespace;
(function (internalNamespace) {var someClass = (function () {
        function someClass() {}
        return someClass;
    }());
    internalNamespace.someClass = someClass;
})(internalNamespace || (internalNamespace = {}));
var internalOther;
(function (internalOther) {var something;
    (function (something) {var someClass = (function () {
            function someClass() {}
            return someClass;
        }());
        something.someClass = someClass;
    })(something = internalOther.something || (internalOther.something = {}));
})(internalOther || (internalOther = {}));
var internalImport = internalNamespace.someClass;

var internalConst = 10;
var internalEnum;
(function (internalEnum) {
    internalEnum[internalEnum["a"] = 0] = "a";
    internalEnum[internalEnum["b"] = 1] = "b";
    internalEnum[internalEnum["c"] = 2] = "c";
})(internalEnum || (internalEnum = {}));
var C = (function () {
    function C() {
    }
    C.prototype.doSomething = function () {
        console.log("something got done");
    };
    return C;
}());
var c = new C();
c.doSomething();
//# sourceMappingURL=third-output.js.map

//// [/src/third/thirdjs/output/third-output.js.map]
{"version":3,"file":"third-output.js","sourceRoot":"","sources":["../../../first/first_PART1.ts","../../../first/first_part2.ts","../../../first/first_part3.ts","../../../second/second_part1.ts","../../../second/second_part2.ts","../../third_part1.ts"],"names":[],"mappings":";AAIA,IAAM,CAAC,GAAG,cAAc,CAAC;;;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AACf,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACXf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC;ACED,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;AAED;IACmB,oBAAgB,CAAC;;IAEjB,wBAAM,GAAN,cAAW,CAAC;IACZ,sBAAI,sBAAC;aAAL,cAAU,OAAO,EAAE,CAAC,CAAC,CAAC;aACtB,UAAM,GAAW,IAAI,CAAC;;;OADA;IAEzC,cAAC;AAAD,CAAC,AAND,IAMC;AACD,IAAU,OAAO,CAShB;AATD,WAAU,OAAO;IACE;QAAA,cAAiB,CAAC;QAAD,QAAC;IAAD,CAAC,AAAlB,IAAkB;IAAL,SAAC,IAAI,CAAA;IAClB,SAAgB,GAAG,KAAI,CAAC;IAAR,WAAG,MAAK,CAAA;IACxB,IAAiB,aAAa,CAAsB;IAApD,WAAiB,aAAa,GAAG;YAAA,cAAgB,CAAC;YAAD,QAAC;QAAD,CAAC,AAAjB,IAAiB;QAAJ,eAAC,IAAG,CAAA;IAAC,CAAC,EAAnC,aAAa,GAAb,qBAAa,KAAb,qBAAa,QAAsB;IACpD,IAAiB,SAAS,CAAwC;IAAlE,WAAiB,SAAS,GAAC,IAAA,SAAS,CAA8B;QAAvC,WAAA,SAAS,GAAG;gBAAA,sBAAwB,CAAC;gBAAD,gBAAC;YAAD,CAAC,AAAzB,IAAyB;YAAZ,mBAAS,YAAG,CAAA;QAAC,CAAC,EAAvC,SAAS,GAAT,mBAAS,KAAT,mBAAS,QAA8B;IAAD,CAAC,EAAjD,SAAS,GAAT,iBAAS,KAAT,iBAAS,QAAwC;IACpD,kBAAU,GAAG,aAAa,CAAC,CAAC,CAAC;;IAE9B,qBAAa,GAAG,EAAE,CAAC;IAChC,IAAY,YAAwB;IAApC,WAAY,YAAY;QAAG,yCAAC,CAAA;QAAE,yCAAC,CAAA;QAAE,yCAAC,CAAA;IAAC,CAAC,EAAxB,YAAY,GAAZ,oBAAY,KAAZ,oBAAY,QAAY;AACvD,CAAC,EATS,OAAO,KAAP,OAAO,QAShB;AACc;IAAA,sBAAiB,CAAC;IAAD,gBAAC;AAAD,CAAC,AAAlB,IAAkB;AAClB,SAAS,WAAW,KAAI,CAAC;AACzB,IAAU,iBAAiB,CAA8B;AAAzD,WAAU,iBAAiB,GAAG;QAAA,sBAAwB,CAAC;QAAD,gBAAC;IAAD,CAAC,AAAzB,IAAyB;IAAZ,2BAAS,YAAG,CAAA;AAAC,CAAC,EAA/C,iBAAiB,KAAjB,iBAAiB,QAA8B;AACzD,IAAU,aAAa,CAAwC;AAA/D,WAAU,aAAa,GAAC,IAAA,SAAS,CAA8B;IAAvC,WAAA,SAAS,GAAG;YAAA,sBAAwB,CAAC;YAAD,gBAAC;QAAD,CAAC,AAAzB,IAAyB;QAAZ,mBAAS,YAAG,CAAA;IAAC,CAAC,EAAvC,SAAS,GAAT,uBAAS,KAAT,uBAAS,QAA8B;AAAD,CAAC,EAArD,aAAa,KAAb,aAAa,QAAwC;AAC/D,IAAO,cAAc,GAAG,iBAAiB,CAAC,SAAS,CAAC;;AAEpD,IAAM,aAAa,GAAG,EAAE,CAAC;AACzB,IAAK,YAAwB;AAA7B,WAAK,YAAY;IAAG,yCAAC,CAAA;IAAE,yCAAC,CAAA;IAAE,yCAAC,CAAA;AAAC,CAAC,EAAxB,YAAY,KAAZ,YAAY,QAAY;ACpC5C;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC;ACJD,IAAI,CAAC,GAAG,IAAI,CAAC,EAAE,CAAC;AAChB,CAAC,CAAC,WAAW,EAAE,CAAC"}

//// [/src/third/thirdjs/output/third-output.js.map.baseline.txt]
===================================================================
JsFile: third-output.js
mapUrl: third-output.js.map
sourceRoot: 
sources: ../../../first/first_PART1.ts,../../../first/first_part2.ts,../../../first/first_part3.ts,../../../second/second_part1.ts,../../../second/second_part2.ts,../../third_part1.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_PART1.ts
-------------------------------------------------------------------
>>>
>>>var s = "Hello, world";
1 >
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^^^^^^^^^^^
6 >                      ^
1 >/**@internal*/ interface TheFirst {
  >    none: any;
  >}
  >
  >
2 >const 
3 >    s
4 >      = 
5 >        "Hello, world"
6 >                      ;
1 >Emitted(2, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(2, 5) Source(5, 7) + SourceIndex(0)
3 >Emitted(2, 6) Source(5, 8) + SourceIndex(0)
4 >Emitted(2, 9) Source(5, 11) + SourceIndex(0)
5 >Emitted(2, 23) Source(5, 25) + SourceIndex(0)
6 >Emitted(2, 24) Source(5, 26) + SourceIndex(0)
---
>>>
>>>
>>>console.log(s);
1 >
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^->
1 >
  >
  >interface NoJsForHereEither {
  >    none: any;
  >}
  >
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1 >Emitted(5, 1) Source(11, 1) + SourceIndex(0)
2 >Emitted(5, 8) Source(11, 8) + SourceIndex(0)
3 >Emitted(5, 9) Source(11, 9) + SourceIndex(0)
4 >Emitted(5, 12) Source(11, 12) + SourceIndex(0)
5 >Emitted(5, 13) Source(11, 13) + SourceIndex(0)
6 >Emitted(5, 14) Source(11, 14) + SourceIndex(0)
7 >Emitted(5, 15) Source(11, 15) + SourceIndex(0)
8 >Emitted(5, 16) Source(11, 16) + SourceIndex(0)
---
>>>console.log(s);
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^^->
1->
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1->Emitted(6, 1) Source(12, 1) + SourceIndex(0)
2 >Emitted(6, 8) Source(12, 8) + SourceIndex(0)
3 >Emitted(6, 9) Source(12, 9) + SourceIndex(0)
4 >Emitted(6, 12) Source(12, 12) + SourceIndex(0)
5 >Emitted(6, 13) Source(12, 13) + SourceIndex(0)
6 >Emitted(6, 14) Source(12, 14) + SourceIndex(0)
7 >Emitted(6, 15) Source(12, 15) + SourceIndex(0)
8 >Emitted(6, 16) Source(12, 16) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_part2.ts
-------------------------------------------------------------------
>>>console.log(f());
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^
1->
2 >console
3 >       .
4 >        log
5 >           (
6 >            f
7 >             ()
8 >               )
9 >                ;
1->Emitted(7, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(7, 8) Source(1, 8) + SourceIndex(1)
3 >Emitted(7, 9) Source(1, 9) + SourceIndex(1)
4 >Emitted(7, 12) Source(1, 12) + SourceIndex(1)
5 >Emitted(7, 13) Source(1, 13) + SourceIndex(1)
6 >Emitted(7, 14) Source(1, 14) + SourceIndex(1)
7 >Emitted(7, 16) Source(1, 16) + SourceIndex(1)
8 >Emitted(7, 17) Source(1, 17) + SourceIndex(1)
9 >Emitted(7, 18) Source(1, 18) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_part3.ts
-------------------------------------------------------------------
>>>function f() {
1 >
2 >^^^^^^^^^
3 >         ^
4 >          ^^^^^^^^^^^^^^^^^^^->
1 >
2 >function 
3 >         f
1 >Emitted(8, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(8, 10) Source(1, 10) + SourceIndex(2)
3 >Emitted(8, 11) Source(1, 11) + SourceIndex(2)
---
>>>    return "JS does hoists";
1->^^^^
2 >    ^^^^^^^
3 >           ^^^^^^^^^^^^^^^^
4 >                           ^
1->() {
  >    
2 >    return 
3 >           "JS does hoists"
4 >                           ;
1->Emitted(9, 5) Source(2, 5) + SourceIndex(2)
2 >Emitted(9, 12) Source(2, 12) + SourceIndex(2)
3 >Emitted(9, 28) Source(2, 28) + SourceIndex(2)
4 >Emitted(9, 29) Source(2, 29) + SourceIndex(2)
---
>>>}
1 >
2 >^
3 > ^^^^^^->
1 >
  >
2 >}
1 >Emitted(10, 1) Source(3, 1) + SourceIndex(2)
2 >Emitted(10, 2) Source(3, 2) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../second/second_part1.ts
-------------------------------------------------------------------
>>>var N;
1->
2 >^^^^
3 >    ^
4 >     ^
5 >      ^^^^^^^^^^->
1->namespace N {
  >    // Comment text
  >}
  >
  >
2 >namespace 
3 >    N
4 >      {
  >         function f() {
  >             console.log('testing');
  >         }
  >     
  >         f();
  >     }
1->Emitted(11, 1) Source(5, 1) + SourceIndex(3)
2 >Emitted(11, 5) Source(5, 11) + SourceIndex(3)
3 >Emitted(11, 6) Source(5, 12) + SourceIndex(3)
4 >Emitted(11, 7) Source(11, 2) + SourceIndex(3)
---
>>>(function (N) {
1->
2 >^^^^^^^^^^^
3 >           ^
4 >            ^^^^^^^->
1->
2 >namespace 
3 >           N
1->Emitted(12, 1) Source(5, 1) + SourceIndex(3)
2 >Emitted(12, 12) Source(5, 11) + SourceIndex(3)
3 >Emitted(12, 13) Source(5, 12) + SourceIndex(3)
---
>>>    function f() {
1->^^^^
2 >    ^^^^^^^^^
3 >             ^
4 >              ^^^^^^^^^^^^^^^^^^->
1-> {
  >    
2 >    function 
3 >             f
1->Emitted(13, 5) Source(6, 5) + SourceIndex(3)
2 >Emitted(13, 14) Source(6, 14) + SourceIndex(3)
3 >Emitted(13, 15) Source(6, 15) + SourceIndex(3)
---
>>>        console.log('testing');
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^
7 >                             ^
8 >                              ^
1->() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    'testing'
7 >                             )
8 >                              ;
1->Emitted(14, 9) Source(7, 9) + SourceIndex(3)
2 >Emitted(14, 16) Source(7, 16) + SourceIndex(3)
3 >Emitted(14, 17) Source(7, 17) + SourceIndex(3)
4 >Emitted(14, 20) Source(7, 20) + SourceIndex(3)
5 >Emitted(14, 21) Source(7, 21) + SourceIndex(3)
6 >Emitted(14, 30) Source(7, 30) + SourceIndex(3)
7 >Emitted(14, 31) Source(7, 31) + SourceIndex(3)
8 >Emitted(14, 32) Source(7, 32) + SourceIndex(3)
---
>>>    }
1 >^^^^
2 >    ^
1 >
  >    
2 >    }
1 >Emitted(15, 5) Source(8, 5) + SourceIndex(3)
2 >Emitted(15, 6) Source(8, 6) + SourceIndex(3)
---
>>>
>>>    f();
1 >^^^^
2 >    ^
3 >     ^^
4 >       ^
5 >        ^^^^^^^^^^^->
1 >
  >
  >    
2 >    f
3 >     ()
4 >       ;
1 >Emitted(17, 5) Source(10, 5) + SourceIndex(3)
2 >Emitted(17, 6) Source(10, 6) + SourceIndex(3)
3 >Emitted(17, 8) Source(10, 8) + SourceIndex(3)
4 >Emitted(17, 9) Source(10, 9) + SourceIndex(3)
---
>>>})(N || (N = {}));
1->
2 >^
3 > ^^
4 >   ^
5 >    ^^^^^
6 >         ^
7 >          ^^^^^^^^
8 >                  ^^^^^^^^^^^->
1->
  >
2 >}
3 > 
4 >   N
5 >    
6 >         N
7 >           {
  >              function f() {
  >                  console.log('testing');
  >              }
  >          
  >              f();
  >          }
1->Emitted(18, 1) Source(11, 1) + SourceIndex(3)
2 >Emitted(18, 2) Source(11, 2) + SourceIndex(3)
3 >Emitted(18, 4) Source(5, 11) + SourceIndex(3)
4 >Emitted(18, 5) Source(5, 12) + SourceIndex(3)
5 >Emitted(18, 10) Source(5, 11) + SourceIndex(3)
6 >Emitted(18, 11) Source(5, 12) + SourceIndex(3)
7 >Emitted(18, 19) Source(11, 2) + SourceIndex(3)
---
>>>var normalC = (function () {
1->
2 >^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
  >
1->Emitted(19, 1) Source(13, 1) + SourceIndex(3)
---
>>>    function normalC() {}
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^
3 >                        ^
1->class normalC {
  >    /**@internal*/ 
2 >    constructor() { 
3 >                        }
1->Emitted(20, 5) Source(14, 20) + SourceIndex(3)
2 >Emitted(20, 25) Source(14, 36) + SourceIndex(3)
3 >Emitted(20, 26) Source(14, 37) + SourceIndex(3)
---
>>>
>>>    normalC.prototype.method = function () { };
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^
3 >                            ^^^
4 >                               ^^^^^^^^^^^^^^
5 >                                             ^
6 >                                              ^^^^^^->
1 >
  >    /**@internal*/ prop: string;
  >    /**@internal*/ 
2 >    method
3 >                            
4 >                               method() { 
5 >                                             }
1 >Emitted(22, 5) Source(16, 20) + SourceIndex(3)
2 >Emitted(22, 29) Source(16, 26) + SourceIndex(3)
3 >Emitted(22, 32) Source(16, 20) + SourceIndex(3)
4 >Emitted(22, 46) Source(16, 31) + SourceIndex(3)
5 >Emitted(22, 47) Source(16, 32) + SourceIndex(3)
---
>>>    Object.defineProperty(normalC.prototype, "c", {
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^
3 >                          ^^^^^^^^^^^^^^^^^^^^^^
1->
  >    /**@internal*/ 
2 >    get 
3 >                          c
1->Emitted(23, 5) Source(17, 20) + SourceIndex(3)
2 >Emitted(23, 27) Source(17, 24) + SourceIndex(3)
3 >Emitted(23, 49) Source(17, 25) + SourceIndex(3)
---
>>>        get: function () { return 10; },
1 >^^^^^^^^^^^^^
2 >             ^^^^^^^^^^^^^^
3 >                           ^^^^^^^
4 >                                  ^^
5 >                                    ^
6 >                                     ^
7 >                                      ^
1 >
2 >             get c() { 
3 >                           return 
4 >                                  10
5 >                                    ;
6 >                                      
7 >                                      }
1 >Emitted(24, 14) Source(17, 20) + SourceIndex(3)
2 >Emitted(24, 28) Source(17, 30) + SourceIndex(3)
3 >Emitted(24, 35) Source(17, 37) + SourceIndex(3)
4 >Emitted(24, 37) Source(17, 39) + SourceIndex(3)
5 >Emitted(24, 38) Source(17, 40) + SourceIndex(3)
6 >Emitted(24, 39) Source(17, 41) + SourceIndex(3)
7 >Emitted(24, 40) Source(17, 42) + SourceIndex(3)
---
>>>        set: function (val) { },
1 >^^^^^^^^^^^^^
2 >             ^^^^^^^^^^
3 >                       ^^^
4 >                          ^^^^
5 >                              ^
1 >
  >    /**@internal*/ 
2 >             set c(
3 >                       val: number
4 >                          ) { 
5 >                              }
1 >Emitted(25, 14) Source(18, 20) + SourceIndex(3)
2 >Emitted(25, 24) Source(18, 26) + SourceIndex(3)
3 >Emitted(25, 27) Source(18, 37) + SourceIndex(3)
4 >Emitted(25, 31) Source(18, 41) + SourceIndex(3)
5 >Emitted(25, 32) Source(18, 42) + SourceIndex(3)
---
>>>        enumerable: false,
>>>        configurable: true
>>>    });
1 >^^^^^^^
2 >       ^^^^^^^^^^^^^->
1 >
1 >Emitted(28, 8) Source(17, 42) + SourceIndex(3)
---
>>>    return normalC;
1->^^^^
2 >    ^^^^^^^^^^^^^^
1->
  >    /**@internal*/ set c(val: number) { }
  >
2 >    }
1->Emitted(29, 5) Source(19, 1) + SourceIndex(3)
2 >Emitted(29, 19) Source(19, 2) + SourceIndex(3)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^->
1 >
2 >}
3 > 
4 > class normalC {
  >     /**@internal*/ constructor() { }
  >     /**@internal*/ prop: string;
  >     /**@internal*/ method() { }
  >     /**@internal*/ get c() { return 10; }
  >     /**@internal*/ set c(val: number) { }
  > }
1 >Emitted(30, 1) Source(19, 1) + SourceIndex(3)
2 >Emitted(30, 2) Source(19, 2) + SourceIndex(3)
3 >Emitted(30, 2) Source(13, 1) + SourceIndex(3)
4 >Emitted(30, 6) Source(19, 2) + SourceIndex(3)
---
>>>var normalN;
1->
2 >^^^^
3 >    ^^^^^^^
4 >           ^
5 >            ^^^^^^^^^^->
1->
  >
2 >namespace 
3 >    normalN
4 >            {
  >               /**@internal*/ export class C { }
  >               /**@internal*/ export function foo() {}
  >               /**@internal*/ export namespace someNamespace { export class C {} }
  >               /**@internal*/ export namespace someOther.something { export class someClass {} }
  >               /**@internal*/ export import someImport = someNamespace.C;
  >               /**@internal*/ export type internalType = internalC;
  >               /**@internal*/ export const internalConst = 10;
  >               /**@internal*/ export enum internalEnum { a, b, c }
  >           }
1->Emitted(31, 1) Source(20, 1) + SourceIndex(3)
2 >Emitted(31, 5) Source(20, 11) + SourceIndex(3)
3 >Emitted(31, 12) Source(20, 18) + SourceIndex(3)
4 >Emitted(31, 13) Source(29, 2) + SourceIndex(3)
---
>>>(function (normalN) {
1->
2 >^^^^^^^^^^^
3 >           ^^^^^^^
4 >                  ^^^^^^^^^->
1->
2 >namespace 
3 >           normalN
1->Emitted(32, 1) Source(20, 1) + SourceIndex(3)
2 >Emitted(32, 12) Source(20, 11) + SourceIndex(3)
3 >Emitted(32, 19) Source(20, 18) + SourceIndex(3)
---
>>>    var C = (function () {
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^->
1-> {
  >    /**@internal*/ 
1->Emitted(33, 5) Source(21, 20) + SourceIndex(3)
---
>>>        function C() {}
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^
3 >                      ^
1->
2 >        export class C { 
3 >                      }
1->Emitted(34, 9) Source(21, 20) + SourceIndex(3)
2 >Emitted(34, 23) Source(21, 37) + SourceIndex(3)
3 >Emitted(34, 24) Source(21, 38) + SourceIndex(3)
---
>>>        return C;
1 >^^^^^^^^
2 >        ^^^^^^^^
1 >
2 >        }
1 >Emitted(35, 9) Source(21, 37) + SourceIndex(3)
2 >Emitted(35, 17) Source(21, 38) + SourceIndex(3)
---
>>>    }());
1 >^^^^
2 >    ^
3 >     
4 >     ^^^^
5 >         ^^^^^^^^^^->
1 >
2 >    }
3 >     
4 >     export class C { }
1 >Emitted(36, 5) Source(21, 37) + SourceIndex(3)
2 >Emitted(36, 6) Source(21, 38) + SourceIndex(3)
3 >Emitted(36, 6) Source(21, 20) + SourceIndex(3)
4 >Emitted(36, 10) Source(21, 38) + SourceIndex(3)
---
>>>    normalN.C = C;
1->^^^^
2 >    ^^^^^^^^^
3 >             ^^^^
4 >                 ^
5 >                  ^^^^^->
1->
2 >    C
3 >              { }
4 >                 
1->Emitted(37, 5) Source(21, 33) + SourceIndex(3)
2 >Emitted(37, 14) Source(21, 34) + SourceIndex(3)
3 >Emitted(37, 18) Source(21, 38) + SourceIndex(3)
4 >Emitted(37, 19) Source(21, 38) + SourceIndex(3)
---
>>>    function foo() { }
1->^^^^
2 >    ^^^^^^^^^
3 >             ^^^
4 >                ^^^^^
5 >                     ^
6 >                      ^->
1->
  >    /**@internal*/ 
2 >    export function 
3 >             foo
4 >                () {
5 >                     }
1->Emitted(38, 5) Source(22, 20) + SourceIndex(3)
2 >Emitted(38, 14) Source(22, 36) + SourceIndex(3)
3 >Emitted(38, 17) Source(22, 39) + SourceIndex(3)
4 >Emitted(38, 22) Source(22, 43) + SourceIndex(3)
5 >Emitted(38, 23) Source(22, 44) + SourceIndex(3)
---
>>>    normalN.foo = foo;
1->^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^
4 >                     ^
5 >                      ^->
1->
2 >    foo
3 >               () {}
4 >                     
1->Emitted(39, 5) Source(22, 36) + SourceIndex(3)
2 >Emitted(39, 16) Source(22, 39) + SourceIndex(3)
3 >Emitted(39, 22) Source(22, 44) + SourceIndex(3)
4 >Emitted(39, 23) Source(22, 44) + SourceIndex(3)
---
>>>    var someNamespace;
1->^^^^
2 >    ^^^^
3 >        ^^^^^^^^^^^^^
4 >                     ^
5 >                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >    /**@internal*/ 
2 >    export namespace 
3 >        someNamespace
4 >                      { export class C {} }
1->Emitted(40, 5) Source(23, 20) + SourceIndex(3)
2 >Emitted(40, 9) Source(23, 37) + SourceIndex(3)
3 >Emitted(40, 22) Source(23, 50) + SourceIndex(3)
4 >Emitted(40, 23) Source(23, 72) + SourceIndex(3)
---
>>>    (function (someNamespace) {var C = (function () {
1->^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^^^^^^^^
4 >                            ^^^
1->
2 >    export namespace 
3 >               someNamespace
4 >                             { 
1->Emitted(41, 5) Source(23, 20) + SourceIndex(3)
2 >Emitted(41, 16) Source(23, 37) + SourceIndex(3)
3 >Emitted(41, 29) Source(23, 50) + SourceIndex(3)
4 >Emitted(41, 32) Source(23, 53) + SourceIndex(3)
---
>>>            function C() {}
1 >^^^^^^^^^^^^
2 >            ^^^^^^^^^^^^^^
3 >                          ^
1 >
2 >            export class C {
3 >                          }
1 >Emitted(42, 13) Source(23, 53) + SourceIndex(3)
2 >Emitted(42, 27) Source(23, 69) + SourceIndex(3)
3 >Emitted(42, 28) Source(23, 70) + SourceIndex(3)
---
>>>            return C;
1 >^^^^^^^^^^^^
2 >            ^^^^^^^^
1 >
2 >            }
1 >Emitted(43, 13) Source(23, 69) + SourceIndex(3)
2 >Emitted(43, 21) Source(23, 70) + SourceIndex(3)
---
>>>        }());
1 >^^^^^^^^
2 >        ^
3 >         
4 >         ^^^^
5 >             ^^^^^^^^^^^^^^^^->
1 >
2 >        }
3 >         
4 >         export class C {}
1 >Emitted(44, 9) Source(23, 69) + SourceIndex(3)
2 >Emitted(44, 10) Source(23, 70) + SourceIndex(3)
3 >Emitted(44, 10) Source(23, 53) + SourceIndex(3)
4 >Emitted(44, 14) Source(23, 70) + SourceIndex(3)
---
>>>        someNamespace.C = C;
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^^
3 >                       ^^^^
4 >                           ^
5 >                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >        C
3 >                        {}
4 >                           
1->Emitted(45, 9) Source(23, 66) + SourceIndex(3)
2 >Emitted(45, 24) Source(23, 67) + SourceIndex(3)
3 >Emitted(45, 28) Source(23, 70) + SourceIndex(3)
4 >Emitted(45, 29) Source(23, 70) + SourceIndex(3)
---
>>>    })(someNamespace = normalN.someNamespace || (normalN.someNamespace = {}));
1->^^^^
2 >    ^
3 >     ^^
4 >       ^^^^^^^^^^^^^
5 >                    ^^^
6 >                       ^^^^^^^^^^^^^^^^^^^^^
7 >                                            ^^^^^
8 >                                                 ^^^^^^^^^^^^^^^^^^^^^
9 >                                                                      ^^^^^^^^
1-> 
2 >    }
3 >     
4 >       someNamespace
5 >                    
6 >                       someNamespace
7 >                                            
8 >                                                 someNamespace
9 >                                                                       { export class C {} }
1->Emitted(46, 5) Source(23, 71) + SourceIndex(3)
2 >Emitted(46, 6) Source(23, 72) + SourceIndex(3)
3 >Emitted(46, 8) Source(23, 37) + SourceIndex(3)
4 >Emitted(46, 21) Source(23, 50) + SourceIndex(3)
5 >Emitted(46, 24) Source(23, 37) + SourceIndex(3)
6 >Emitted(46, 45) Source(23, 50) + SourceIndex(3)
7 >Emitted(46, 50) Source(23, 37) + SourceIndex(3)
8 >Emitted(46, 71) Source(23, 50) + SourceIndex(3)
9 >Emitted(46, 79) Source(23, 72) + SourceIndex(3)
---
>>>    var someOther;
1 >^^^^
2 >    ^^^^
3 >        ^^^^^^^^^
4 >                 ^
5 >                  ^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >    /**@internal*/ 
2 >    export namespace 
3 >        someOther
4 >                 .something { export class someClass {} }
1 >Emitted(47, 5) Source(24, 20) + SourceIndex(3)
2 >Emitted(47, 9) Source(24, 37) + SourceIndex(3)
3 >Emitted(47, 18) Source(24, 46) + SourceIndex(3)
4 >Emitted(47, 19) Source(24, 86) + SourceIndex(3)
---
>>>    (function (someOther) {var something;
1->^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^^^^
4 >                        ^^^
5 >                           ^^^^
6 >                               ^^^^^^^^^
7 >                                        ^
8 >                                         ^^^^^^^^^^^^^^^^^^^^^->
1->
2 >    export namespace 
3 >               someOther
4 >                        .
5 >                           
6 >                               something
7 >                                         { export class someClass {} }
1->Emitted(48, 5) Source(24, 20) + SourceIndex(3)
2 >Emitted(48, 16) Source(24, 37) + SourceIndex(3)
3 >Emitted(48, 25) Source(24, 46) + SourceIndex(3)
4 >Emitted(48, 28) Source(24, 47) + SourceIndex(3)
5 >Emitted(48, 32) Source(24, 47) + SourceIndex(3)
6 >Emitted(48, 41) Source(24, 56) + SourceIndex(3)
7 >Emitted(48, 42) Source(24, 86) + SourceIndex(3)
---
>>>        (function (something) {var someClass = (function () {
1->^^^^^^^^
2 >        ^^^^^^^^^^^
3 >                   ^^^^^^^^^
4 >                            ^^^
5 >                               ^^^^^^^^^->
1->
2 >        
3 >                   something
4 >                             { 
1->Emitted(49, 9) Source(24, 47) + SourceIndex(3)
2 >Emitted(49, 20) Source(24, 47) + SourceIndex(3)
3 >Emitted(49, 29) Source(24, 56) + SourceIndex(3)
4 >Emitted(49, 32) Source(24, 59) + SourceIndex(3)
---
>>>                function someClass() {}
1->^^^^^^^^^^^^^^^^
2 >                ^^^^^^^^^^^^^^^^^^^^^^
3 >                                      ^
1->
2 >                export class someClass {
3 >                                      }
1->Emitted(50, 17) Source(24, 59) + SourceIndex(3)
2 >Emitted(50, 39) Source(24, 83) + SourceIndex(3)
3 >Emitted(50, 40) Source(24, 84) + SourceIndex(3)
---
>>>                return someClass;
1 >^^^^^^^^^^^^^^^^
2 >                ^^^^^^^^^^^^^^^^
1 >
2 >                }
1 >Emitted(51, 17) Source(24, 83) + SourceIndex(3)
2 >Emitted(51, 33) Source(24, 84) + SourceIndex(3)
---
>>>            }());
1 >^^^^^^^^^^^^
2 >            ^
3 >             
4 >             ^^^^
5 >                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >            }
3 >             
4 >             export class someClass {}
1 >Emitted(52, 13) Source(24, 83) + SourceIndex(3)
2 >Emitted(52, 14) Source(24, 84) + SourceIndex(3)
3 >Emitted(52, 14) Source(24, 59) + SourceIndex(3)
4 >Emitted(52, 18) Source(24, 84) + SourceIndex(3)
---
>>>            something.someClass = someClass;
1->^^^^^^^^^^^^
2 >            ^^^^^^^^^^^^^^^^^^^
3 >                               ^^^^^^^^^^^^
4 >                                           ^
5 >                                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >            someClass
3 >                                {}
4 >                                           
1->Emitted(53, 13) Source(24, 72) + SourceIndex(3)
2 >Emitted(53, 32) Source(24, 81) + SourceIndex(3)
3 >Emitted(53, 44) Source(24, 84) + SourceIndex(3)
4 >Emitted(53, 45) Source(24, 84) + SourceIndex(3)
---
>>>        })(something = someOther.something || (someOther.something = {}));
1->^^^^^^^^
2 >        ^
3 >         ^^
4 >           ^^^^^^^^^
5 >                    ^^^
6 >                       ^^^^^^^^^^^^^^^^^^^
7 >                                          ^^^^^
8 >                                               ^^^^^^^^^^^^^^^^^^^
9 >                                                                  ^^^^^^^^
1-> 
2 >        }
3 >         
4 >           something
5 >                    
6 >                       something
7 >                                          
8 >                                               something
9 >                                                                   { export class someClass {} }
1->Emitted(54, 9) Source(24, 85) + SourceIndex(3)
2 >Emitted(54, 10) Source(24, 86) + SourceIndex(3)
3 >Emitted(54, 12) Source(24, 47) + SourceIndex(3)
4 >Emitted(54, 21) Source(24, 56) + SourceIndex(3)
5 >Emitted(54, 24) Source(24, 47) + SourceIndex(3)
6 >Emitted(54, 43) Source(24, 56) + SourceIndex(3)
7 >Emitted(54, 48) Source(24, 47) + SourceIndex(3)
8 >Emitted(54, 67) Source(24, 56) + SourceIndex(3)
9 >Emitted(54, 75) Source(24, 86) + SourceIndex(3)
---
>>>    })(someOther = normalN.someOther || (normalN.someOther = {}));
1 >^^^^
2 >    ^
3 >     ^^
4 >       ^^^^^^^^^
5 >                ^^^
6 >                   ^^^^^^^^^^^^^^^^^
7 >                                    ^^^^^
8 >                                         ^^^^^^^^^^^^^^^^^
9 >                                                          ^^^^^^^^
1 >
2 >    }
3 >     
4 >       someOther
5 >                
6 >                   someOther
7 >                                    
8 >                                         someOther
9 >                                                          .something { export class someClass {} }
1 >Emitted(55, 5) Source(24, 85) + SourceIndex(3)
2 >Emitted(55, 6) Source(24, 86) + SourceIndex(3)
3 >Emitted(55, 8) Source(24, 37) + SourceIndex(3)
4 >Emitted(55, 17) Source(24, 46) + SourceIndex(3)
5 >Emitted(55, 20) Source(24, 37) + SourceIndex(3)
6 >Emitted(55, 37) Source(24, 46) + SourceIndex(3)
7 >Emitted(55, 42) Source(24, 37) + SourceIndex(3)
8 >Emitted(55, 59) Source(24, 46) + SourceIndex(3)
9 >Emitted(55, 67) Source(24, 86) + SourceIndex(3)
---
>>>    normalN.someImport = someNamespace.C;
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^^^
3 >                      ^^^
4 >                         ^^^^^^^^^^^^^
5 >                                      ^
6 >                                       ^
7 >                                        ^
1 >
  >    /**@internal*/ export import 
2 >    someImport
3 >                       = 
4 >                         someNamespace
5 >                                      .
6 >                                       C
7 >                                        ;
1 >Emitted(56, 5) Source(25, 34) + SourceIndex(3)
2 >Emitted(56, 23) Source(25, 44) + SourceIndex(3)
3 >Emitted(56, 26) Source(25, 47) + SourceIndex(3)
4 >Emitted(56, 39) Source(25, 60) + SourceIndex(3)
5 >Emitted(56, 40) Source(25, 61) + SourceIndex(3)
6 >Emitted(56, 41) Source(25, 62) + SourceIndex(3)
7 >Emitted(56, 42) Source(25, 63) + SourceIndex(3)
---
>>>
>>>    normalN.internalConst = 10;
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^
3 >                         ^^^
4 >                            ^^
5 >                              ^
1 >
  >    /**@internal*/ export type internalType = internalC;
  >    /**@internal*/ export const 
2 >    internalConst
3 >                          = 
4 >                            10
5 >                              ;
1 >Emitted(58, 5) Source(27, 33) + SourceIndex(3)
2 >Emitted(58, 26) Source(27, 46) + SourceIndex(3)
3 >Emitted(58, 29) Source(27, 49) + SourceIndex(3)
4 >Emitted(58, 31) Source(27, 51) + SourceIndex(3)
5 >Emitted(58, 32) Source(27, 52) + SourceIndex(3)
---
>>>    var internalEnum;
1 >^^^^
2 >    ^^^^
3 >        ^^^^^^^^^^^^
4 >                    ^^^^^^^^^^^->
1 >
  >    /**@internal*/ 
2 >    export enum 
3 >        internalEnum { a, b, c }
1 >Emitted(59, 5) Source(28, 20) + SourceIndex(3)
2 >Emitted(59, 9) Source(28, 32) + SourceIndex(3)
3 >Emitted(59, 21) Source(28, 56) + SourceIndex(3)
---
>>>    (function (internalEnum) {
1->^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^^^^^^^
4 >                           ^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >    export enum 
3 >               internalEnum
1->Emitted(60, 5) Source(28, 20) + SourceIndex(3)
2 >Emitted(60, 16) Source(28, 32) + SourceIndex(3)
3 >Emitted(60, 28) Source(28, 44) + SourceIndex(3)
---
>>>        internalEnum[internalEnum["a"] = 0] = "a";
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                 ^
4 >                                                  ^->
1-> { 
2 >        a
3 >                                                 
1->Emitted(61, 9) Source(28, 47) + SourceIndex(3)
2 >Emitted(61, 50) Source(28, 48) + SourceIndex(3)
3 >Emitted(61, 51) Source(28, 48) + SourceIndex(3)
---
>>>        internalEnum[internalEnum["b"] = 1] = "b";
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                 ^
4 >                                                  ^->
1->, 
2 >        b
3 >                                                 
1->Emitted(62, 9) Source(28, 50) + SourceIndex(3)
2 >Emitted(62, 50) Source(28, 51) + SourceIndex(3)
3 >Emitted(62, 51) Source(28, 51) + SourceIndex(3)
---
>>>        internalEnum[internalEnum["c"] = 2] = "c";
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                 ^
4 >                                                  ^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->, 
2 >        c
3 >                                                 
1->Emitted(63, 9) Source(28, 53) + SourceIndex(3)
2 >Emitted(63, 50) Source(28, 54) + SourceIndex(3)
3 >Emitted(63, 51) Source(28, 54) + SourceIndex(3)
---
>>>    })(internalEnum = normalN.internalEnum || (normalN.internalEnum = {}));
1->^^^^
2 >    ^
3 >     ^^
4 >       ^^^^^^^^^^^^
5 >                   ^^^
6 >                      ^^^^^^^^^^^^^^^^^^^^
7 >                                          ^^^^^
8 >                                               ^^^^^^^^^^^^^^^^^^^^
9 >                                                                   ^^^^^^^^
1-> 
2 >    }
3 >     
4 >       internalEnum
5 >                   
6 >                      internalEnum
7 >                                          
8 >                                               internalEnum
9 >                                                                    { a, b, c }
1->Emitted(64, 5) Source(28, 55) + SourceIndex(3)
2 >Emitted(64, 6) Source(28, 56) + SourceIndex(3)
3 >Emitted(64, 8) Source(28, 32) + SourceIndex(3)
4 >Emitted(64, 20) Source(28, 44) + SourceIndex(3)
5 >Emitted(64, 23) Source(28, 32) + SourceIndex(3)
6 >Emitted(64, 43) Source(28, 44) + SourceIndex(3)
7 >Emitted(64, 48) Source(28, 32) + SourceIndex(3)
8 >Emitted(64, 68) Source(28, 44) + SourceIndex(3)
9 >Emitted(64, 76) Source(28, 56) + SourceIndex(3)
---
>>>})(normalN || (normalN = {}));
1 >
2 >^
3 > ^^
4 >   ^^^^^^^
5 >          ^^^^^
6 >               ^^^^^^^
7 >                      ^^^^^^^^
8 >                              ^->
1 >
  >
2 >}
3 > 
4 >   normalN
5 >          
6 >               normalN
7 >                       {
  >                          /**@internal*/ export class C { }
  >                          /**@internal*/ export function foo() {}
  >                          /**@internal*/ export namespace someNamespace { export class C {} }
  >                          /**@internal*/ export namespace someOther.something { export class someClass {} }
  >                          /**@internal*/ export import someImport = someNamespace.C;
  >                          /**@internal*/ export type internalType = internalC;
  >                          /**@internal*/ export const internalConst = 10;
  >                          /**@internal*/ export enum internalEnum { a, b, c }
  >                      }
1 >Emitted(65, 1) Source(29, 1) + SourceIndex(3)
2 >Emitted(65, 2) Source(29, 2) + SourceIndex(3)
3 >Emitted(65, 4) Source(20, 11) + SourceIndex(3)
4 >Emitted(65, 11) Source(20, 18) + SourceIndex(3)
5 >Emitted(65, 16) Source(20, 11) + SourceIndex(3)
6 >Emitted(65, 23) Source(20, 18) + SourceIndex(3)
7 >Emitted(65, 31) Source(29, 2) + SourceIndex(3)
---
>>>var internalC = (function () {
1->
2 >^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >/**@internal*/ 
1->Emitted(66, 1) Source(30, 16) + SourceIndex(3)
---
>>>    function internalC() {}
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^
3 >                          ^
1->
2 >    class internalC {
3 >                          }
1->Emitted(67, 5) Source(30, 16) + SourceIndex(3)
2 >Emitted(67, 27) Source(30, 33) + SourceIndex(3)
3 >Emitted(67, 28) Source(30, 34) + SourceIndex(3)
---
>>>    return internalC;
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^
1 >
2 >    }
1 >Emitted(68, 5) Source(30, 33) + SourceIndex(3)
2 >Emitted(68, 21) Source(30, 34) + SourceIndex(3)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class internalC {}
1 >Emitted(69, 1) Source(30, 33) + SourceIndex(3)
2 >Emitted(69, 2) Source(30, 34) + SourceIndex(3)
3 >Emitted(69, 2) Source(30, 16) + SourceIndex(3)
4 >Emitted(69, 6) Source(30, 34) + SourceIndex(3)
---
>>>function internalfoo() { }
1->
2 >^^^^^^^^^
3 >         ^^^^^^^^^^^
4 >                    ^^^^^
5 >                         ^
1->
  >/**@internal*/ 
2 >function 
3 >         internalfoo
4 >                    () {
5 >                         }
1->Emitted(70, 1) Source(31, 16) + SourceIndex(3)
2 >Emitted(70, 10) Source(31, 25) + SourceIndex(3)
3 >Emitted(70, 21) Source(31, 36) + SourceIndex(3)
4 >Emitted(70, 26) Source(31, 40) + SourceIndex(3)
5 >Emitted(70, 27) Source(31, 41) + SourceIndex(3)
---
>>>var internalNamespace;
1 >
2 >^^^^
3 >    ^^^^^^^^^^^^^^^^^
4 >                     ^
5 >                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >/**@internal*/ 
2 >namespace 
3 >    internalNamespace
4 >                      { export class someClass {} }
1 >Emitted(71, 1) Source(32, 16) + SourceIndex(3)
2 >Emitted(71, 5) Source(32, 26) + SourceIndex(3)
3 >Emitted(71, 22) Source(32, 43) + SourceIndex(3)
4 >Emitted(71, 23) Source(32, 73) + SourceIndex(3)
---
>>>(function (internalNamespace) {var someClass = (function () {
1->
2 >^^^^^^^^^^^
3 >           ^^^^^^^^^^^^^^^^^
4 >                            ^^^
5 >                               ^->
1->
2 >namespace 
3 >           internalNamespace
4 >                             { 
1->Emitted(72, 1) Source(32, 16) + SourceIndex(3)
2 >Emitted(72, 12) Source(32, 26) + SourceIndex(3)
3 >Emitted(72, 29) Source(32, 43) + SourceIndex(3)
4 >Emitted(72, 32) Source(32, 46) + SourceIndex(3)
---
>>>        function someClass() {}
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^^^^
3 >                              ^
1->
2 >        export class someClass {
3 >                              }
1->Emitted(73, 9) Source(32, 46) + SourceIndex(3)
2 >Emitted(73, 31) Source(32, 70) + SourceIndex(3)
3 >Emitted(73, 32) Source(32, 71) + SourceIndex(3)
---
>>>        return someClass;
1 >^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^
1 >
2 >        }
1 >Emitted(74, 9) Source(32, 70) + SourceIndex(3)
2 >Emitted(74, 25) Source(32, 71) + SourceIndex(3)
---
>>>    }());
1 >^^^^
2 >    ^
3 >     
4 >     ^^^^
5 >         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >    }
3 >     
4 >     export class someClass {}
1 >Emitted(75, 5) Source(32, 70) + SourceIndex(3)
2 >Emitted(75, 6) Source(32, 71) + SourceIndex(3)
3 >Emitted(75, 6) Source(32, 46) + SourceIndex(3)
4 >Emitted(75, 10) Source(32, 71) + SourceIndex(3)
---
>>>    internalNamespace.someClass = someClass;
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                               ^^^^^^^^^^^^
4 >                                           ^
5 >                                            ^^^^^^^->
1->
2 >    someClass
3 >                                {}
4 >                                           
1->Emitted(76, 5) Source(32, 59) + SourceIndex(3)
2 >Emitted(76, 32) Source(32, 68) + SourceIndex(3)
3 >Emitted(76, 44) Source(32, 71) + SourceIndex(3)
4 >Emitted(76, 45) Source(32, 71) + SourceIndex(3)
---
>>>})(internalNamespace || (internalNamespace = {}));
1->
2 >^
3 > ^^
4 >   ^^^^^^^^^^^^^^^^^
5 >                    ^^^^^
6 >                         ^^^^^^^^^^^^^^^^^
7 >                                          ^^^^^^^^
1-> 
2 >}
3 > 
4 >   internalNamespace
5 >                    
6 >                         internalNamespace
7 >                                           { export class someClass {} }
1->Emitted(77, 1) Source(32, 72) + SourceIndex(3)
2 >Emitted(77, 2) Source(32, 73) + SourceIndex(3)
3 >Emitted(77, 4) Source(32, 26) + SourceIndex(3)
4 >Emitted(77, 21) Source(32, 43) + SourceIndex(3)
5 >Emitted(77, 26) Source(32, 26) + SourceIndex(3)
6 >Emitted(77, 43) Source(32, 43) + SourceIndex(3)
7 >Emitted(77, 51) Source(32, 73) + SourceIndex(3)
---
>>>var internalOther;
1 >
2 >^^^^
3 >    ^^^^^^^^^^^^^
4 >                 ^
5 >                  ^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >/**@internal*/ 
2 >namespace 
3 >    internalOther
4 >                 .something { export class someClass {} }
1 >Emitted(78, 1) Source(33, 16) + SourceIndex(3)
2 >Emitted(78, 5) Source(33, 26) + SourceIndex(3)
3 >Emitted(78, 18) Source(33, 39) + SourceIndex(3)
4 >Emitted(78, 19) Source(33, 79) + SourceIndex(3)
---
>>>(function (internalOther) {var something;
1->
2 >^^^^^^^^^^^
3 >           ^^^^^^^^^^^^^
4 >                        ^^^
5 >                           ^^^^
6 >                               ^^^^^^^^^
7 >                                        ^
8 >                                         ^^^^^^^^^^^^^^^^^->
1->
2 >namespace 
3 >           internalOther
4 >                        .
5 >                           
6 >                               something
7 >                                         { export class someClass {} }
1->Emitted(79, 1) Source(33, 16) + SourceIndex(3)
2 >Emitted(79, 12) Source(33, 26) + SourceIndex(3)
3 >Emitted(79, 25) Source(33, 39) + SourceIndex(3)
4 >Emitted(79, 28) Source(33, 40) + SourceIndex(3)
5 >Emitted(79, 32) Source(33, 40) + SourceIndex(3)
6 >Emitted(79, 41) Source(33, 49) + SourceIndex(3)
7 >Emitted(79, 42) Source(33, 79) + SourceIndex(3)
---
>>>    (function (something) {var someClass = (function () {
1->^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^^^^
4 >                        ^^^
5 >                           ^^^^^^^^^->
1->
2 >    
3 >               something
4 >                         { 
1->Emitted(80, 5) Source(33, 40) + SourceIndex(3)
2 >Emitted(80, 16) Source(33, 40) + SourceIndex(3)
3 >Emitted(80, 25) Source(33, 49) + SourceIndex(3)
4 >Emitted(80, 28) Source(33, 52) + SourceIndex(3)
---
>>>            function someClass() {}
1->^^^^^^^^^^^^
2 >            ^^^^^^^^^^^^^^^^^^^^^^
3 >                                  ^
1->
2 >            export class someClass {
3 >                                  }
1->Emitted(81, 13) Source(33, 52) + SourceIndex(3)
2 >Emitted(81, 35) Source(33, 76) + SourceIndex(3)
3 >Emitted(81, 36) Source(33, 77) + SourceIndex(3)
---
>>>            return someClass;
1 >^^^^^^^^^^^^
2 >            ^^^^^^^^^^^^^^^^
1 >
2 >            }
1 >Emitted(82, 13) Source(33, 76) + SourceIndex(3)
2 >Emitted(82, 29) Source(33, 77) + SourceIndex(3)
---
>>>        }());
1 >^^^^^^^^
2 >        ^
3 >         
4 >         ^^^^
5 >             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >        }
3 >         
4 >         export class someClass {}
1 >Emitted(83, 9) Source(33, 76) + SourceIndex(3)
2 >Emitted(83, 10) Source(33, 77) + SourceIndex(3)
3 >Emitted(83, 10) Source(33, 52) + SourceIndex(3)
4 >Emitted(83, 14) Source(33, 77) + SourceIndex(3)
---
>>>        something.someClass = someClass;
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^
3 >                           ^^^^^^^^^^^^
4 >                                       ^
5 >                                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >        someClass
3 >                            {}
4 >                                       
1->Emitted(84, 9) Source(33, 65) + SourceIndex(3)
2 >Emitted(84, 28) Source(33, 74) + SourceIndex(3)
3 >Emitted(84, 40) Source(33, 77) + SourceIndex(3)
4 >Emitted(84, 41) Source(33, 77) + SourceIndex(3)
---
>>>    })(something = internalOther.something || (internalOther.something = {}));
1->^^^^
2 >    ^
3 >     ^^
4 >       ^^^^^^^^^
5 >                ^^^
6 >                   ^^^^^^^^^^^^^^^^^^^^^^^
7 >                                          ^^^^^
8 >                                               ^^^^^^^^^^^^^^^^^^^^^^^
9 >                                                                      ^^^^^^^^
1-> 
2 >    }
3 >     
4 >       something
5 >                
6 >                   something
7 >                                          
8 >                                               something
9 >                                                                       { export class someClass {} }
1->Emitted(85, 5) Source(33, 78) + SourceIndex(3)
2 >Emitted(85, 6) Source(33, 79) + SourceIndex(3)
3 >Emitted(85, 8) Source(33, 40) + SourceIndex(3)
4 >Emitted(85, 17) Source(33, 49) + SourceIndex(3)
5 >Emitted(85, 20) Source(33, 40) + SourceIndex(3)
6 >Emitted(85, 43) Source(33, 49) + SourceIndex(3)
7 >Emitted(85, 48) Source(33, 40) + SourceIndex(3)
8 >Emitted(85, 71) Source(33, 49) + SourceIndex(3)
9 >Emitted(85, 79) Source(33, 79) + SourceIndex(3)
---
>>>})(internalOther || (internalOther = {}));
1 >
2 >^
3 > ^^
4 >   ^^^^^^^^^^^^^
5 >                ^^^^^
6 >                     ^^^^^^^^^^^^^
7 >                                  ^^^^^^^^
8 >                                          ^^^^^^^^->
1 >
2 >}
3 > 
4 >   internalOther
5 >                
6 >                     internalOther
7 >                                  .something { export class someClass {} }
1 >Emitted(86, 1) Source(33, 78) + SourceIndex(3)
2 >Emitted(86, 2) Source(33, 79) + SourceIndex(3)
3 >Emitted(86, 4) Source(33, 26) + SourceIndex(3)
4 >Emitted(86, 17) Source(33, 39) + SourceIndex(3)
5 >Emitted(86, 22) Source(33, 26) + SourceIndex(3)
6 >Emitted(86, 35) Source(33, 39) + SourceIndex(3)
7 >Emitted(86, 43) Source(33, 79) + SourceIndex(3)
---
>>>var internalImport = internalNamespace.someClass;
1->
2 >^^^^
3 >    ^^^^^^^^^^^^^^
4 >                  ^^^
5 >                     ^^^^^^^^^^^^^^^^^
6 >                                      ^
7 >                                       ^^^^^^^^^
8 >                                                ^
1->
  >/**@internal*/ 
2 >import 
3 >    internalImport
4 >                   = 
5 >                     internalNamespace
6 >                                      .
7 >                                       someClass
8 >                                                ;
1->Emitted(87, 1) Source(34, 16) + SourceIndex(3)
2 >Emitted(87, 5) Source(34, 23) + SourceIndex(3)
3 >Emitted(87, 19) Source(34, 37) + SourceIndex(3)
4 >Emitted(87, 22) Source(34, 40) + SourceIndex(3)
5 >Emitted(87, 39) Source(34, 57) + SourceIndex(3)
6 >Emitted(87, 40) Source(34, 58) + SourceIndex(3)
7 >Emitted(87, 49) Source(34, 67) + SourceIndex(3)
8 >Emitted(87, 50) Source(34, 68) + SourceIndex(3)
---
>>>
>>>var internalConst = 10;
1 >
2 >^^^^
3 >    ^^^^^^^^^^^^^
4 >                 ^^^
5 >                    ^^
6 >                      ^
1 >
  >/**@internal*/ type internalType = internalC;
  >/**@internal*/ 
2 >const 
3 >    internalConst
4 >                  = 
5 >                    10
6 >                      ;
1 >Emitted(89, 1) Source(36, 16) + SourceIndex(3)
2 >Emitted(89, 5) Source(36, 22) + SourceIndex(3)
3 >Emitted(89, 18) Source(36, 35) + SourceIndex(3)
4 >Emitted(89, 21) Source(36, 38) + SourceIndex(3)
5 >Emitted(89, 23) Source(36, 40) + SourceIndex(3)
6 >Emitted(89, 24) Source(36, 41) + SourceIndex(3)
---
>>>var internalEnum;
1 >
2 >^^^^
3 >    ^^^^^^^^^^^^
4 >                ^^^^^^^^^^^->
1 >
  >/**@internal*/ 
2 >enum 
3 >    internalEnum { a, b, c }
1 >Emitted(90, 1) Source(37, 16) + SourceIndex(3)
2 >Emitted(90, 5) Source(37, 21) + SourceIndex(3)
3 >Emitted(90, 17) Source(37, 45) + SourceIndex(3)
---
>>>(function (internalEnum) {
1->
2 >^^^^^^^^^^^
3 >           ^^^^^^^^^^^^
4 >                       ^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >enum 
3 >           internalEnum
1->Emitted(91, 1) Source(37, 16) + SourceIndex(3)
2 >Emitted(91, 12) Source(37, 21) + SourceIndex(3)
3 >Emitted(91, 24) Source(37, 33) + SourceIndex(3)
---
>>>    internalEnum[internalEnum["a"] = 0] = "a";
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                             ^
4 >                                              ^->
1-> { 
2 >    a
3 >                                             
1->Emitted(92, 5) Source(37, 36) + SourceIndex(3)
2 >Emitted(92, 46) Source(37, 37) + SourceIndex(3)
3 >Emitted(92, 47) Source(37, 37) + SourceIndex(3)
---
>>>    internalEnum[internalEnum["b"] = 1] = "b";
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                             ^
4 >                                              ^->
1->, 
2 >    b
3 >                                             
1->Emitted(93, 5) Source(37, 39) + SourceIndex(3)
2 >Emitted(93, 46) Source(37, 40) + SourceIndex(3)
3 >Emitted(93, 47) Source(37, 40) + SourceIndex(3)
---
>>>    internalEnum[internalEnum["c"] = 2] = "c";
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                             ^
1->, 
2 >    c
3 >                                             
1->Emitted(94, 5) Source(37, 42) + SourceIndex(3)
2 >Emitted(94, 46) Source(37, 43) + SourceIndex(3)
3 >Emitted(94, 47) Source(37, 43) + SourceIndex(3)
---
>>>})(internalEnum || (internalEnum = {}));
1 >
2 >^
3 > ^^
4 >   ^^^^^^^^^^^^
5 >               ^^^^^
6 >                    ^^^^^^^^^^^^
7 >                                ^^^^^^^^
1 > 
2 >}
3 > 
4 >   internalEnum
5 >               
6 >                    internalEnum
7 >                                 { a, b, c }
1 >Emitted(95, 1) Source(37, 44) + SourceIndex(3)
2 >Emitted(95, 2) Source(37, 45) + SourceIndex(3)
3 >Emitted(95, 4) Source(37, 21) + SourceIndex(3)
4 >Emitted(95, 16) Source(37, 33) + SourceIndex(3)
5 >Emitted(95, 21) Source(37, 21) + SourceIndex(3)
6 >Emitted(95, 33) Source(37, 33) + SourceIndex(3)
7 >Emitted(95, 41) Source(37, 45) + SourceIndex(3)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../second/second_part2.ts
-------------------------------------------------------------------
>>>var C = (function () {
1 >
2 >^^^^^^^^^^^^^^^^^^^->
1 >
1 >Emitted(96, 1) Source(1, 1) + SourceIndex(4)
---
>>>    function C() {
1->^^^^
2 >    ^^->
1->
1->Emitted(97, 5) Source(1, 1) + SourceIndex(4)
---
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->class C {
  >    doSomething() {
  >        console.log("something got done");
  >    }
  >
2 >    }
1->Emitted(98, 5) Source(5, 1) + SourceIndex(4)
2 >Emitted(98, 6) Source(5, 2) + SourceIndex(4)
---
>>>    C.prototype.doSomething = function () {
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^
3 >                           ^^^
4 >                              ^^^^^^^^^^^^^->
1->
2 >    doSomething
3 >                           
1->Emitted(99, 5) Source(2, 5) + SourceIndex(4)
2 >Emitted(99, 28) Source(2, 16) + SourceIndex(4)
3 >Emitted(99, 31) Source(2, 5) + SourceIndex(4)
---
>>>        console.log("something got done");
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^^^^^^^^^^^^
7 >                                        ^
8 >                                         ^
1->doSomething() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    "something got done"
7 >                                        )
8 >                                         ;
1->Emitted(100, 9) Source(3, 9) + SourceIndex(4)
2 >Emitted(100, 16) Source(3, 16) + SourceIndex(4)
3 >Emitted(100, 17) Source(3, 17) + SourceIndex(4)
4 >Emitted(100, 20) Source(3, 20) + SourceIndex(4)
5 >Emitted(100, 21) Source(3, 21) + SourceIndex(4)
6 >Emitted(100, 41) Source(3, 41) + SourceIndex(4)
7 >Emitted(100, 42) Source(3, 42) + SourceIndex(4)
8 >Emitted(100, 43) Source(3, 43) + SourceIndex(4)
---
>>>    };
1 >^^^^
2 >    ^
3 >     ^^^^^^^^^->
1 >
  >    
2 >    }
1 >Emitted(101, 5) Source(4, 5) + SourceIndex(4)
2 >Emitted(101, 6) Source(4, 6) + SourceIndex(4)
---
>>>    return C;
1->^^^^
2 >    ^^^^^^^^
1->
  >
2 >    }
1->Emitted(102, 5) Source(5, 1) + SourceIndex(4)
2 >Emitted(102, 13) Source(5, 2) + SourceIndex(4)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class C {
  >     doSomething() {
  >         console.log("something got done");
  >     }
  > }
1 >Emitted(103, 1) Source(5, 1) + SourceIndex(4)
2 >Emitted(103, 2) Source(5, 2) + SourceIndex(4)
3 >Emitted(103, 2) Source(1, 1) + SourceIndex(4)
4 >Emitted(103, 6) Source(5, 2) + SourceIndex(4)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../third_part1.ts
-------------------------------------------------------------------
>>>var c = new C();
1->
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^->
1->
2 >var 
3 >    c
4 >      = 
5 >        new 
6 >            C
7 >             ()
8 >               ;
1->Emitted(104, 1) Source(1, 1) + SourceIndex(5)
2 >Emitted(104, 5) Source(1, 5) + SourceIndex(5)
3 >Emitted(104, 6) Source(1, 6) + SourceIndex(5)
4 >Emitted(104, 9) Source(1, 9) + SourceIndex(5)
5 >Emitted(104, 13) Source(1, 13) + SourceIndex(5)
6 >Emitted(104, 14) Source(1, 14) + SourceIndex(5)
7 >Emitted(104, 16) Source(1, 16) + SourceIndex(5)
8 >Emitted(104, 17) Source(1, 17) + SourceIndex(5)
---
>>>c.doSomething();
1->
2 >^
3 > ^
4 >  ^^^^^^^^^^^
5 >             ^^
6 >               ^
7 >                ^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
2 >c
3 > .
4 >  doSomething
5 >             ()
6 >               ;
1->Emitted(105, 1) Source(2, 1) + SourceIndex(5)
2 >Emitted(105, 2) Source(2, 2) + SourceIndex(5)
3 >Emitted(105, 3) Source(2, 3) + SourceIndex(5)
4 >Emitted(105, 14) Source(2, 14) + SourceIndex(5)
5 >Emitted(105, 16) Source(2, 16) + SourceIndex(5)
6 >Emitted(105, 17) Source(2, 17) + SourceIndex(5)
---
>>>//# sourceMappingURL=third-output.js.map

//// [/src/third/thirdjs/output/third-output.tsbuildinfo]
{
  "bundle": {
    "commonSourceDirectory": "../..",
    "sourceFiles": [
      "../../third_part1.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 133,
          "kind": "prepend",
          "data": "../../../first/bin/first-output.js",
          "texts": [
            {
              "pos": 0,
              "end": 133,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 133,
          "end": 3060,
          "kind": "prepend",
          "data": "../../../2/second-output.js",
          "texts": [
            {
              "pos": 133,
              "end": 3060,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 3060,
          "end": 3096,
          "kind": "text"
        }
      ]
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 116,
          "kind": "prepend",
          "data": "../../../first/bin/first-output.d.ts",
          "texts": [
            {
              "pos": 0,
              "end": 116,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 116,
          "end": 276,
          "kind": "prepend",
          "data": "../../../2/second-output.d.ts",
          "texts": [
            {
              "pos": 116,
              "end": 276,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 276,
          "end": 295,
          "kind": "text"
        }
      ]
    }
  },
  "version": "FakeTSVersion"
}

//// [/src/third/thirdjs/output/third-output.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/third/thirdjs/output/third-output.js
----------------------------------------------------------------------
prepend: (0-133):: ../../../first/bin/first-output.js texts:: 1
>>--------------------------------------------------------------------
text: (0-133)

var s = "Hello, world";


console.log(s);
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}

----------------------------------------------------------------------
prepend: (133-3060):: ../../../2/second-output.js texts:: 1
>>--------------------------------------------------------------------
text: (133-3060)
var N;
(function (N) {
    function f() {
        console.log('testing');
    }

    f();
})(N || (N = {}));
var normalC = (function () {
    function normalC() {}

    normalC.prototype.method = function () { };
    Object.defineProperty(normalC.prototype, "c", {
        get: function () { return 10; },
        set: function (val) { },
        enumerable: false,
        configurable: true
    });
    return normalC;
}());
var normalN;
(function (normalN) {
    var C = (function () {
        function C() {}
        return C;
    }());
    normalN.C = C;
    function foo() { }
    normalN.foo = foo;
    var someNamespace;
    (function (someNamespace) {var C = (function () {
            function C() {}
            return C;
        }());
        someNamespace.C = C;
    })(someNamespace = normalN.someNamespace || (normalN.someNamespace = {}));
    var someOther;
    (function (someOther) {var something;
        (function (something) {var someClass = (function () {
                function someClass() {}
                return someClass;
            }());
            something.someClass = someClass;
        })(something = someOther.something || (someOther.something = {}));
    })(someOther = normalN.someOther || (normalN.someOther = {}));
    normalN.someImport = someNamespace.C;

    normalN.internalConst = 10;
    var internalEnum;
    (function (internalEnum) {
        internalEnum[internalEnum["a"] = 0] = "a";
        internalEnum[internalEnum["b"] = 1] = "b";
        internalEnum[internalEnum["c"] = 2] = "c";
    })(internalEnum = normalN.internalEnum || (normalN.internalEnum = {}));
})(normalN || (normalN = {}));
var internalC = (function () {
    function internalC() {}
    return internalC;
}());
function internalfoo() { }
var internalNamespace;
(function (internalNamespace) {var someClass = (function () {
        function someClass() {}
        return someClass;
    }());
    internalNamespace.someClass = someClass;
})(internalNamespace || (internalNamespace = {}));
var internalOther;
(function (internalOther) {var something;
    (function (something) {var someClass = (function () {
            function someClass() {}
            return someClass;
        }());
        something.someClass = someClass;
    })(something = internalOther.something || (internalOther.something = {}));
})(internalOther || (internalOther = {}));
var internalImport = internalNamespace.someClass;

var internalConst = 10;
var internalEnum;
(function (internalEnum) {
    internalEnum[internalEnum["a"] = 0] = "a";
    internalEnum[internalEnum["b"] = 1] = "b";
    internalEnum[internalEnum["c"] = 2] = "c";
})(internalEnum || (internalEnum = {}));
var C = (function () {
    function C() {
    }
    C.prototype.doSomething = function () {
        console.log("something got done");
    };
    return C;
}());

----------------------------------------------------------------------
text: (3060-3096)
var c = new C();
c.doSomething();

======================================================================
======================================================================
File:: /src/third/thirdjs/output/third-output.d.ts
----------------------------------------------------------------------
prepend: (0-116):: ../../../first/bin/first-output.d.ts texts:: 1
>>--------------------------------------------------------------------
text: (0-116)
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
declare function f(): string;

----------------------------------------------------------------------
prepend: (116-276):: ../../../2/second-output.d.ts texts:: 1
>>--------------------------------------------------------------------
text: (116-276)
declare namespace N {
}
declare namespace N {
}
declare class normalC {
}
declare namespace normalN {
}
declare class C {
    doSomething(): void;
}

----------------------------------------------------------------------
text: (276-295)
declare var c: C;

======================================================================

