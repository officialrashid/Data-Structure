// let array =[50,40,30,20,10]
// let target =40
// array.sort((array,target)=>array-target)

// console.log(array);

// function binarySearch(array,target){

//     let start =0;
//     let end = array.length-1;
//     let nothing ="value not found"
//     while(start<= end){

//         let mid = Math.floor((start+end)/2)

//         if(array[mid] == target){

//             return mid
//         }else if(array[mid]<target){

//             start = mid+1
//         }else if(array[mid] > target){

//             end= mid -1
//         }
//     }
//     return nothing
// }

// console.log(binarySearch(array,target));

let array =[50,40,30,20,10]

let target =40

array.sort((array,target)=> array-target)

function binarySearch(array,target){

   let start =0;

   let end = array.length-1

   while(start<=end){

    let mid = Math.floor((start+end)/2)

    if(array[mid]==target){

        return mid
    }else if(array[mid] < target){

        start = mid+1
    }else if(array[mid] > target)
    {
        end = mid -1
    }
   }
}

console.log(binarySearch(array,target));