var array=[2,3,9,56,7,13,11]


function reverseArray(array){

for(i=0;i<array.length/2;i++){


    temp =array[i];

    array[i] = array[array.length-i-1];

     array[array.length-i-1] = temp;


}
return array
}

console.log(reverseArray(array));