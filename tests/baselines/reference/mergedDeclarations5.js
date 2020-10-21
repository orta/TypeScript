//// [tests/cases/compiler/mergedDeclarations5.ts] ////

//// [a.ts]
class A {
    protected foo() {}
}
//// [b.ts]
interface A { }

class B extends A {
    protected foo() {}
}

//// [a.js]
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.foo = function () { };
    return A;
}());
//// [b.js]
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

var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.foo = function () { };
    return B;
}(A));
