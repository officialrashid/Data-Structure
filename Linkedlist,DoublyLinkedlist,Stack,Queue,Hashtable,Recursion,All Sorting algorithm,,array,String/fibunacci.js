var array=[2,3]

function fibunacci(n){

for(i=2;i<n;i++){

    array[i] = array[i-1] + array[i-2] 
}
return array
}

// console.log(fibunacci(5));
console.log(fibunacci(10));
// console.log(fibunacci(15));