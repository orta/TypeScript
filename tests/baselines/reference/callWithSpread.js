//// [callWithSpread.ts]
interface X {
    foo(x: number, y: number, ...z: string[]): X;
}

function foo(x: number, y: number, ...z: string[]) {
}

var a: string[];
var z: number[];
var obj: X;
var xa: X[];

foo(1, 2, "abc");
foo(1, 2, ...a);
foo(1, 2, ...a, "abc");

obj.foo(1, 2, "abc");
obj.foo(1, 2, ...a);
obj.foo(1, 2, ...a, "abc");

obj.foo(1, 2, ...a).foo(1, 2, "abc");
obj.foo(1, 2, ...a).foo(1, 2, ...a);
obj.foo(1, 2, ...a).foo(1, 2, ...a, "abc");

(obj.foo)(1, 2, "abc");
(obj.foo)(1, 2, ...a);
(obj.foo)(1, 2, ...a, "abc");

((obj.foo)(1, 2, ...a).foo)(1, 2, "abc");
((obj.foo)(1, 2, ...a).foo)(1, 2, ...a);
((obj.foo)(1, 2, ...a).foo)(1, 2, ...a, "abc");

xa[1].foo(1, 2, "abc");
xa[1].foo(1, 2, ...a);
xa[1].foo(1, 2, ...a, "abc");

(<Function>xa[1].foo)(...[1, 2, "abc"]);

class C {
    constructor(x: number, y: number, ...z: string[]) {
        this.foo(x, y);
        this.foo(x, y, ...z);
    }
    foo(x: number, y: number, ...z: string[]) {
    }
}

class D extends C {
    constructor() {
        super(1, 2);
        super(1, 2, ...a);
    }
    foo() {
        super.foo(1, 2);
        super.foo(1, 2, ...a);
    }
}


//// [callWithSpread.js]
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _a, _b, _c, _d, _e, _f, _g;

function foo(x, y) {var z = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        z[_i - 2] = arguments[_i];
    }
}

var a;
var z;
var obj;
var xa;

foo(1, 2, "abc");
foo.apply(void 0, __spreadArrays([1, 2], a));
foo.apply(void 0, __spreadArrays([1, 2], a, ["abc"]));

obj.foo(1, 2, "abc");
obj.foo.apply(obj, __spreadArrays([1, 2], a));
obj.foo.apply(obj, __spreadArrays([1, 2], a, ["abc"]));

obj.foo.apply(obj, __spreadArrays([1, 2], a)).foo(1, 2, "abc");
(_a = obj.foo.apply(obj, __spreadArrays([1, 2], a))).foo.apply(_a, __spreadArrays([1, 2], a));
(_b = obj.foo.apply(obj, __spreadArrays([1, 2], a))).foo.apply(_b, __spreadArrays([1, 2], a, ["abc"]));

(obj.foo)(1, 2, "abc");
obj.foo.apply(obj, __spreadArrays([1, 2], a));
obj.foo.apply(obj, __spreadArrays([1, 2], a, ["abc"]));

(obj.foo.apply(obj, __spreadArrays([1, 2], a)).foo)(1, 2, "abc");
(_c = obj.foo.apply(obj, __spreadArrays([1, 2], a))).foo.apply(_c, __spreadArrays([1, 2], a));
(_d = obj.foo.apply(obj, __spreadArrays([1, 2], a))).foo.apply(_d, __spreadArrays([1, 2], a, ["abc"]));

xa[1].foo(1, 2, "abc");
(_e = xa[1]).foo.apply(_e, __spreadArrays([1, 2], a));
(_f = xa[1]).foo.apply(_f, __spreadArrays([1, 2], a, ["abc"]));

(_g = xa[1]).foo.apply(_g, [1, 2, "abc"]);

var C = /** @class */ (function () {
    function C(x, y) {var z = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            z[_i - 2] = arguments[_i];
        }
        this.foo(x, y);
        this.foo.apply(this, __spreadArrays([x, y], z));
    }
    C.prototype.foo = function (x, y) {var z = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            z[_i - 2] = arguments[_i];
        }
    };
    return C;
}());
var D = /** @class */ (function (_super) {
    __extends(D, _super);
    function D() {
        var _this = _super.call(this, 1, 2) || this;
        _this = _super.apply(this, __spreadArrays([1, 2], a)) || this;
        return _this;
    }
    D.prototype.foo = function () {
        _super.prototype.foo.call(this, 1, 2);
        _super.prototype.foo.apply(this, __spreadArrays([1, 2], a));
    };
    return D;
}(C));
