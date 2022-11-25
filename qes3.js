let countries= new XMLHttpRequest();
countries.open("GET","https://restcountries.com/v3.1/all");
countries.send();
countries.onload=function(){
let data=countries.response;
let result=JSON.parse(data);
//console.log(result);
for(i=0;i<result.length;i++){
    console.log("name = " +result[i].name.common,"region = "+result[i].region,"sub region = " +result[i].subregion,"population = "+result[i].population)
}
}