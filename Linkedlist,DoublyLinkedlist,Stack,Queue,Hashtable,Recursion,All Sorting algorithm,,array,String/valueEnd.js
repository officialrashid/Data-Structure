

 var array = [10,6,4,5,6,7,8,6]

target= 6

function Endvalues(array,target){
  
   for(i=0;i<array.length;i++){

    if(array[i]==target){
        
        // array.splice(i,1);
        // array.unshift(target);
        console.log(array[i]);

        break;
    }
    
   }
//    return array

}



console.log(Endvalues(array,target));

//  var array = [10,6,4,5,6,7,8,6]

// target= 6

// function EndValues(array, target) {
//   let result = new Array(array.length);
//   let targetCount = 0;
//   let resultIndex = 0;
//   for (let i = 0; i < array.length; i++) {
//       if (array[i] !== target) {
//           result[resultIndex++] = array[i];
//       } else {
//           targetCount++;
//       }
//   }
//   for (let i = 0; i < targetCount; i++) {
//       result[resultIndex++] = target;
//   }
//   return result;
// }
// console.log(Endvalues(array,target));

