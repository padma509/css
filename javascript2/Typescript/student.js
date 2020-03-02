"use strict";
exports.__esModule = true;
var person_1 = require("./person");
var Student2 = /** @class */ (function () {
    function Student2(name1, per) {
        this.per = per;
        this.sname = name1;
        console.log(this.sname);
        console.log(this.per.pname);
    }
    return Student2;
}());
var std = new Student2("pooja", new person_1.Person("padma", 4));
