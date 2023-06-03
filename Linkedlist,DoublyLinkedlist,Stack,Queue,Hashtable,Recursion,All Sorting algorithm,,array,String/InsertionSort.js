var array=[30,40,20,10,5,100,50,25]

// function InsertionSort(array){

//     for(i=1;i<array.length;i++){

//         let temp = array[i]
//         let j= i-1

//         while(j>=0 && array[j] > temp){

//             array[j+1] = array[j]

//             j--
//         }
//         array[j+1]=temp;
//     }
//     return array
// }
// console.log(array,"not sorted array");
// console.log(InsertionSort(array));

function InsertionSort(array){

    for(i=1;i<array.length ;i++){

        let temp = array[i]

        let j=i-1

        while(j>=0 && array[j] > temp){

            array[j+1] = array[j]
            j--
        }
        array[j+1] = temp
    }
    return array
}

console.log(array);
console.log(InsertionSort(array));