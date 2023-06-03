var array=[30,40,20,10,200,5,100,50,25]

function BubbleSort(array){

    for(let i=0;i<array.length;i++){

        for(let j=0;j<array.length-i-1;j++){

            if(array[j] > array[j+1]){

                let temp = array[j]

                array[j] = array[j+1]

                array[j+1] = temp
            }
        }
       
    }
    return array
}

console.log(BubbleSort(array));