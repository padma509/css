var arr=[12,31,11,45,65,34,51];
for( var i=0;i<arr.length;i++){

    for( var j=2;j<arr[i];j++){
        if(arr[i]%j==1){
    console.log(arr[i]);
        }
    }
}