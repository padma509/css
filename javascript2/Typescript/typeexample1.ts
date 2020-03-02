
 class  Employe{
     eid:number =10;
     name:string="padma";
     department:string="it";
     salary:number=30000;
     getId(){
        console.log(this.eid + " " +this.name);
     }

 }
 var emp =new Employe();
  emp.getId();
  
