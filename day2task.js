var obj =[{
    "name":"sathish",
    "age":22,
    "isMajor":true,
    "area":"chennai",
//for in loop.
}]
for(let i in obj){
     console.log(obj[i]);    
 }


 //for loop
for(i=0; i<obj.length; i++){
    console.log(obj[i]);
}

//for of loop
for(let i of obj){
    console.log(i);
}
