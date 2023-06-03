function mergesort(arr){
    if(arr.length<2){
        return arr
    }
    const mid=Math.floor(arr.length/2)
    let leftarr=arr.slice(0,mid)
    let rightarr=arr.slice(mid)

   return merge(mergesort(leftarr),mergesort(rightarr)) 
}
function merge(leftarr,rightarr){

    const sorted=[]

    while(leftarr.length &&rightarr.length){
        
        if(leftarr[0]<=rightarr[0]){
            sorted.push(leftarr.shift())
        }else{
            sorted.push(rightarr.shift())
        }
    }
    return[...sorted,...leftarr,...rightarr]
}
let arr = [30, 40, 20, 10, 5, 100, 50, 25];
console.log(mergesort(arr));