let country = new XMLHttpRequest();
country.open("GET","https://restcountries.com/v3.1/all");
country.send();
country.onload=function(){
    let data =country.response;
    let result=JSON.parse(data);
    //console.log(result)
   for(var i=0;i<result.length;i++){
        console.log(result[i].name.common,result[i].flags.png);
    }
}