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
var Vehicle = /** @class */ (function () {
    function Vehicle(name, model) {
        this.vname = name;
        this.vmodel = model;
    }
    Vehicle.prototype.getdetails = function () {
        console.log(this.vname);
    };
    return Vehicle;
}());
var Bmw = /** @class */ (function (_super) {
    __extends(Bmw, _super);
    function Bmw(name, model, location) {
        var _this = _super.call(this, name, model) || this;
        _this.vloaction = location;
        return _this;
    }
    return Bmw;
}(Vehicle));
var car = new Bmw("i20", "Hyundai", "hyd");
//var car2=new Vehicle("120","Hyundai");
console.log(car.vname + "  " + car.vmodel + "  " + car.vloaction);
car.getdetails();
