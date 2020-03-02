var Car = /** @class */ (function () {
    function Car() {
        this.cmodel = "basic";
    }
    Car.prototype.getcno = function () {
        console.log(this.cmodel);
    };
    return Car;
}());
