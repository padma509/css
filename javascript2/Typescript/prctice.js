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
//class creation//
var Hello = /** @class */ (function () {
    function Hello() {
    }
    Hello.prototype.getname = function () {
        var abc;
    };
    return Hello;
}());
var Person = /** @class */ (function () {
    function Person() {
        this.id = 10;
    }
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.getdetails = function () {
        var i = this.id;
        console.log(i);
    };
    return Student;
}(Person));
var z = new Student();
z.getdetails();
var Vehical1 = /** @class */ (function () {
    function Vehical1() {
        this.name = "audi";
    }
    return Vehical1;
}());
var Bmwc = /** @class */ (function (_super) {
    __extends(Bmwc, _super);
    function Bmwc(no1, color) {
        var _this = _super.call(this) || this;
        _this.cno = no1;
        _this.ccolor = color;
        console.log(_this.cno + " " + _this.ccolor);
        return _this;
    }
    Bmwc.prototype.getout = function () {
        var z = this.name;
        console.log(z);
    };
    return Bmwc;
}(Vehical1));
var qa = new Bmwc(2, "red");
//qa.getout();
