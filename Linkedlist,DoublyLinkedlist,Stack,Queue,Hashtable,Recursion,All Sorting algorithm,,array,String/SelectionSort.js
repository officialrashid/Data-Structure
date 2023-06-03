var array=[300,30,40,20,10,200,5,100,50,25]

function SelectionSort(array){

  for(let i=0;i<array.length;i++)
  {
    let minimum = i;

    for(j=i+1;j<array.length;j++){

      if(array[j] < array[minimum]){

        minimum = j
      }
    }
    let temp = array[i]

    array[i] = array[minimum]
    array[minimum]=temp
  }
  return array
}
console.log(array);
console.log(SelectionSort(array));