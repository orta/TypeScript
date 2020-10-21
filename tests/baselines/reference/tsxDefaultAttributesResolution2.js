//// [file.tsx]
import React = require('react');

interface Prop {
    x: true;
}
class Poisoned extends React.Component<Prop, {}> {
    render() {
        return <div>Hello</div>;
    }
}

// OK
let p = <Poisoned x/>;

//// [file.jsx]
"use strict";
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
exports.__esModule = true;
var React = require("react");

var Poisoned = /** @class */ (function (_super) {
    __extends(Poisoned, _super);
    function Poisoned() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Poisoned.prototype.render = function () {
        return <div>Hello</div>;
    };
    return Poisoned;
}(React.Component));
// OK
var p = <Poisoned x/>;
