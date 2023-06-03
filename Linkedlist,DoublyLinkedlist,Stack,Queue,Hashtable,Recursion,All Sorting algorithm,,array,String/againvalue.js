let array1 =[ 1,2,3]
let array2=[]
for(let i=0;i<array1.length;i++){

    array2[i] = array1[i]

    array2[i+array1.length] = array1.length-i
}
console.log(array2);