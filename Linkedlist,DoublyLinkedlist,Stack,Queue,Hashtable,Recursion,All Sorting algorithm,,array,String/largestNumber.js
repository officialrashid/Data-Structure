var array=[2,3,9,56,1,13,90]
var num=0
function largestNumber(array){

for(i=0;i<array.length;i++){

    if(array[i]>num){
       
        num=array[i]
    }
}
return num;


}

console.log(largestNumber(array));