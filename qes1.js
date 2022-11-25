var obj1 = {name:"person 1",age:5};
var obj2 = {age:5,name:"person 1"};
let js=JSON.stringify(obj1);
let js2=JSON.stringify(obj2);
for(x in obj1){
    var result =0;
    for(y in obj2){
        if(obj2[y]==obj1[x]){
            result=1;
            break;
        }else{
            result=0;
        }
    }
}
if(result==1){
    console.log("true")
}else{
    console.log("false")
}