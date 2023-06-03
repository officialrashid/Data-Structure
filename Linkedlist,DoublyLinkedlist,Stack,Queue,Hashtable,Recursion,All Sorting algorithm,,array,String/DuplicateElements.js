
 var array = [10,6,4,5,6,8,8,6,6,4,5,4,4,8]
 
function Duplicates(array){
  
   
        let sets = new Set();
        let duplicateCount = {};
        for (i = 0; i < array.length; i++) {

            if (sets.has(array[i])) {

                if (duplicateCount[array[i]] == undefined) {

                    console.log(array[i]);

                    duplicateCount[array[i]] = 1;
                    
                    // console.log(duplicateCount,"duplicate"); 
                }
            } else {
                sets.add(array[i]);
            }
        }
   
    
}
console.log(array);
Duplicates(array);
