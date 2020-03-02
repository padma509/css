var Employe = /** @class */ (function () {
    function Employe() {
        this.eid = 10;
        this.name = "padma";
        this.department = "it";
        this.salary = 30000;
    }
    Employe.prototype.getId = function () {
        console.log(this.eid + " " + this.name);
    };
    return Employe;
}());
var emp = new Employe();
emp.getId();
