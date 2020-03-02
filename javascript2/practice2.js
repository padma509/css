var a=10;
var b=a;
var a=20;
console.log(a);
console.log(b);


var a=[101,890,8900,78];
var b=a;
console.log(a);
console.log(b);


var per={
    sid:10,
    sname:"padma",
    smarks:{
        tel:40,
        hin:20,
        eng:50,
        gettotal2:function(){
             var x= this.tel+this.hin+this.eng;
             console.log(x);
             return this.getper(x);

        },

        getper:function(x){
            var y =x*100/300;
            console.log(y);

        }
    }
}
per.smarks.gettotal2();
