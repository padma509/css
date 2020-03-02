class Vehicle{

    vname:string;
    vmodel:string;
    constructor(name:string,model:string){
        this.vname=name;
        this.vmodel=model;

    }
    getdetails(){
       console.log(this.vname);
    }
}
class Bmw extends Vehicle{
    vloaction:string;
    constructor(name:string,model:string,location:string){
        super(name,model);
        this.vloaction=location;
    }
}
 var car=new Bmw("i20","Hyundai","hyd");
 //var car2=new Vehicle("120","Hyundai");
 console.log(car.vname +"  "+ car.vmodel+"  " +car.vloaction);
car.getdetails();