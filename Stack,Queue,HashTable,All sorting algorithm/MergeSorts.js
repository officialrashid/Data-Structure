

// function MergeSort(array){

//     if(array.length < 2){

//         return array
//     }

//     let mid = Math.floor(array.length /2)

//     let left = array.slice(0,mid)

//     let right = array.slice(mid)

//     return Merge(MergeSort(left),MergeSort(right))
// }
// function Merge(left ,right){

//     let sorted =[]

//     while(left.length && right.length){

//         if(left[0] <= right[0]){

//             sorted.push(left.shift())
//         }else{

//             sorted.push(right.shift())
//         }
//     }
//     return [...sorted,...left,...right]
// }
// console.log(MergeSort(array));


// function quickSort(array){

//     if(array.length < 2){

//         return array
//     }

//     let pivot = array[array.length-1]
//     let left =[]
//     let right =[]

//     for(let i=0;i<array.length-1;i++){

//         if(array[i] < pivot){

//             left.push(array[i])
//         }else{

//             right.push(array[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }
// console.log(quickSort(array));




// function SelectionSort(array){


//     for(let i=0;i<array.length-1;i++){

//       let minimum = i

//       for(j=i+1 ; j<array.length;j++){

//         if(array[j] < array[minimum]){

//             minimum =j
//         }
//       }
//       if(minimum != i){
//         let temp = array[i]

//         array[i] = array[minimum]
  
//         array[minimum] = temp

//       }
    
//     }
//   return array
// }
// console.log(array);
// console.log(SelectionSort(array));

var array=[30,40,20,10,200,5,100,50,25]

// function InsertionSort(array){

//   for(i=1;i< array.length;i++){
  
//     temp = array[i]
//     let j=i-1
    
//   while(j>=0 && array[j] > temp ){

//     array[j+1] = array[j]

//     j--
//   }
//   array[j+1] = temp

//   }
//   return array
// }
// console.log(InsertionSort(array));