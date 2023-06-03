
var array=[2,3,9,56,7,13,11]
let sum=0;
function Sum(array){

 for(i=0;i<array.length;i++){

     sum=sum+parseInt(array[i])
 }
 return sum;
 
}

console.log(Sum(array));
