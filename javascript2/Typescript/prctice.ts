//class creation//
class Hello {
    id:number;
    getname(){
        var abc:string;
    }
}

class Person {
    id:number=10;
    name:string;
    
}

   
class Student  extends Person {

    sid:number;
    fname:string;
    marks:number;
    grade:string;
    getdetails()
    {
        var i=this.id;
        console.log(i);
    }

}
 var z= new Student();
z.getdetails();

   

class  Vehical1 {
    no:number;
    name:string ="audi";
}

class Bmwc extends Vehical1 {
    cno:number;
    ccolor:string;

    getout(){
        var z= this.name;
        console.log(z);
        

    }
    constructor(no1:number, color:string){
        super();
    this.cno=no1;
    this.ccolor=color;
    console.log(this.cno + " "+this.ccolor);
    }

} 
var qa= new Bmwc(2,"red");
 //qa.getout();

 