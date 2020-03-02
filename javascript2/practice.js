var a=30;
var b=a;
var a=40;
console.log(a);
console.log(b);



var a=[101, 102,109];
var xyz=a;
a[2]=900;
console.log(xyz); 

var a=10, b=70,c=80;
var b=a;
console.log(c);

//object creation//
  var abc ={
      id:300,
      name:"padma",
      age:27,
    
  }
  console.log(abc.age);



  var std={
      id:1,
      name:"puja",
      marks:{
          tel:90,
          eng:80,
          maths:100,
          getmarks:function(){
return this.tel+this.eng+this.maths;

          }
      }
  }
  console.log(std.marks.getmarks());


  var mar={
      id:2,
      name:"padma",
      marks: {
          tel:80,
      eng:70,
      hin:90,
      getmarks:function(){
          console.log(this.tel +this.hin +this.eng);
      }
  }
}
       mar.marks.getmarks();



       var emp ={
           eid:1,
           ename:"sneha",
           hra:3000,
           da:9000,
           allowance:2000,
           bonus:10000,
           basic:38000,
           dep:"it",
           getsal:function(){
               return this.hra+ this.da+this.allowance+this.bonus+this.basic;
           }
       }
       console.log(emp.getsal());

         var student={
             id:3,
             sname:"padma",
             smarks:{
                 tel:90,
                 hin:80,
                 maths:60,
                 gettotal1:function(){
                    var xyz= this.tel+this.hin+this.maths;
                    console.log(xyz);
                    return this.getper(xyz);

                 },
                 getper:function(xyz){
                     var b=xyz*100/300;
                        // return b;
               console.log(b);
                 }
             }
         }
        

   student.smarks.gettotal1();




   var school =[{id:1,name:"padma",grade:"a"},{id:7, name:"sneha",grade:"A"},{id:3,name:"puja",grade:"A"}];
  console.log( school[1].name);




var power={
    sno:1,
    uidno:12233,
    Nou:100,
    uc:3,
    gettotalbill:function(){
        var c= this.Nou*this.uc;
        
        console.log(c);
    }
}   
 power.gettotalbill();




function mul(a,b){

    var c=a*b;
     console.log(c);
 }
 mul(3,2)



 function mul()
 {
     var a=10;
     var b=2;
     var c=a*b;
     console.log(c);
     }
     mul()

     function add()
     {
         var x=2;
         var y=3;
         var z=x+y;
         return z;
                  //console.log(z);
     }
     var a=  add();
     console.log(a);


 function sub(m,n){
   
    var p=m-n;
    return p;
      }
      var l=sub(50,20);
       console.log(l);




function addi (){
    var a=1,b=20;
    var z=a+b;
    console.log(z);
}
addi()


function subi(a,b){
     
     var s=b-a;
     console.log(s);
    }
subi(20,68);



function muli(){
    var a=10;
    var b=30;
    var z=a*b;
    return z;
 

}
var b=muli();
console.log(b);



function div(a,b){
   
    var x=a/b;
    return x;
}
var c=div( 900,9);
console.log(c);





