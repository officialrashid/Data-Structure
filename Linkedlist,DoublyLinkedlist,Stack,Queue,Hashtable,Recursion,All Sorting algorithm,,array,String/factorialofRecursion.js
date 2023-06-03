
function factorial(num){

    for(i=0;i<num;i++){
     
        if(num == 1){

            return 1
        }
        else{

            return  num+factorial(num-1);
        }
       
    }
    
}
console.log(factorial(10)); 

