function HeapSort(arr,length){

    for(let i=Math.floor(length/2)-1;i>=0;i--){

        heapify(arr,length,i)
    }
    for(let i=length-1;i>=0;i--){

        swap(0,i)
        heapify(arr,i,0)
    }
    console.log(arr);
   function heapify(arr,length,i){

        let parent = i
        let left = i*2+1
        let right = i*2+2

        if(left < length && arr[parent] < arr[left]){

            parent=left
        }
        if(right < length && arr[parent] < arr[right]){

            parent = right
        }
        if(parent != i){

            swap(parent,i)
            heapify(arr,length,parent)
        }
    }
    function swap(i,j){

        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
}
let arr=[10,50,16,2,40]
let n=arr.length
HeapSort(arr,n)