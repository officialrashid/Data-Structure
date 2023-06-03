



// function quickSort(arr){
//     if(arr.length < 2){
//         return arr
//     }

//     let pivot = arr[arr.length-1]
//     let left = []
//     let right = []

//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }

//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// console.log(quickSort(arr));

function quickSort(arr){

    if(arr.length < 2){

        return arr
    }
    let pivot = arr[arr.length-1]
    let left=[]
    let right=[]

    for(i=0;i<arr.length-1;i++){

        if(arr[i] < pivot){

            left.push(arr[i])
        }else{

            right.push(arr[i])
        }
    }
   return [...quickSort(left),pivot,...quickSort(right)]
}
let arr = [30, 40, 20, 10, 5, 100, 50, 25];
console.log(quickSort(arr));
