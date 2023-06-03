
let array = [50,5,4,90,55,80]

function MergeSort(array){

    if(array.length < 2){

        return array
    }

    let mid = Math.floor(array.length/2)

    let left = array.slice(0,mid)

    let right = array.slice(mid)

    return Merge(MergeSort(left),MergeSort(right))
}
function Merge(left , right){

    let sorted =[]

    while(left.length && right.length){

        if(left[0] <= right[0]){

            sorted.push(left.shift())
        }else{

            sorted.push(right.shift())
        }
    }
    return [...sorted,...left,...right]
}
console.log(MergeSort(array));