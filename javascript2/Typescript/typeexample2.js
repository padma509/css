var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehical = /** @class */ (function () {
    function Vehical(id, name, model) {
        this.vno = id;
        this.vname = name;
        this.vmodel = model;
    }
    return Vehical;
}());
var Bmw = /** @class */ (function (_super) {
    __extends(Bmw, _super);
    function Bmw(color, id, name, model) {
        var _this = _super.call(this, id, name, model) || this;
        _this.vcolor = color;
        console.log(_this.vcolor + _this.vno + _this.vname + _this.vmodel);
        return _this;
    }
    return Bmw;
}(Vehical));
var abc = new Bmw("black", 2333, "audi", "basic");
