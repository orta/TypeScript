//// [superCallBeforeThisAccessing7.ts]
class Base {
    constructor(c) { }
}
class D extends Base {
    private _t;
    constructor() {
        let x = {
            j: this._t,
        }
        super(undefined);
    }
}


//// [superCallBeforeThisAccessing7.js]
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
var Base = /** @class */ (function () {
    function Base(c) {}
    return Base;
}());
var D = /** @class */ (function (_super) {
    __extends(D, _super);
    function D() {
        var _this = this;
        var x = {
            j: _this._t
        };
        _this = _super.call(this, undefined) || this;
        return _this;
    }
    return D;
}(Base));
