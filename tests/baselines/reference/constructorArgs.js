//// [constructorArgs.ts]
interface Options {
 value: number;
}

class Super {
 constructor(value:number) {
 }
}

class Sub extends Super {
 constructor(public options:Options) {
  super(options.value);
 } 
}


//// [constructorArgs.js]
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

var Super = /** @class */ (function () {
    function Super(value) {
    }
    return Super;
}());
var Sub = /** @class */ (function (_super) {
    __extends(Sub, _super);
    function Sub(options) {
        var _this = _super.call(this, options.value) || this;
        _this.options = options;
        return _this;
    }
    return Sub;
}(Super));
