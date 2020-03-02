class Vehical{
    vno:number;
    vname:string;
    vmodel:string;

    constructor(id:number,name:string,model:string){
        this.vno=id;
        this.vname=name;
        this.vmodel=model;
    }
    

}
 class Bmw extends Vehical{
      vcolor:string;
      constructor(color:string,id:number,name:string,model:string){
          super(id,name,model);
         this.vcolor=color;
          console.log(this.vcolor+this.vno+this.vname+this.vmodel);
      }
 }
  var abc= new Bmw("black", 2333,"audi","basic");
