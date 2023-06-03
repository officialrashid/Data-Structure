

function quickSort(array){

    if(array.length < 2){

        return array
    }

    let pivot = array[array.length-1]
    let left =[]
    let right =[]

    for(i=0;i<array.length-1;i++){

        if(array[i] < pivot){

            left.push(array[i])
        }else{

            right.push(array[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}
const array=[30,40,20,10,200,5,100,50,25]
console.log("no sorted array",array);
console.log(quickSort(array));