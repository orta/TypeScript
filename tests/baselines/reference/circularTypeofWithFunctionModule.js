//// [circularTypeofWithFunctionModule.ts]
// Repro from #6072

class Foo {}

function maker (value: string): typeof maker.Bar {
    return maker.Bar;
}

namespace maker {
    export class Bar extends Foo {}
}


//// [circularTypeofWithFunctionModule.js]
// Repro from #6072
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

var Foo = /** @class */ (function () {
    function Foo() {}
    return Foo;
}());
function maker(value) {
    return maker.Bar;
}
(function (maker) {
    var Bar = /** @class */ (function (_super) {
        __extends(Bar, _super);
        function Bar() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Bar;
    }(Foo));
    maker.Bar = Bar;
})(maker || (maker = {}));
