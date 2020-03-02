
import {Person} from "./person";

class Student2{
    public sname:string;
    public fullname:string;
    constructor(name1:string,public per:Person){
          
           this.sname=name1;
           console.log(this.sname);
           console.log(this.per.pname);
    
    }
}
var std=new Student2("pooja",new Person("padma",4));
