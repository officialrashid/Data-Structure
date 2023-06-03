



var str='hello world'
    let res = str.split('').map(char => {
        return char.charCodeAt(0).toString(2)
    })

console.log(res); 





                                    

let binary = '1100101'

console.log(parseInt(binary,2));

       


// let ar=[6,7,4,5,2,9,10]
// let large=ar[0]
// let seclarg=ar[0]
// for(let i=0;i<ar.length;i++){
//     if(large<ar[i]){
//         seclarg=large
//         large=ar[i]
//     }else if(ar[i]>seclarg ){
//         seclarg=ar[i]
//     }
// }
// console.log("Largest element",large);
// console.log("Second largest",seclarg);   
                                       

// let ar1=[1,2,3,4,5]
// let ar2=[6,7,8,9]
// let n=ar1.length
// let m=ar2.length
// for(let i=0;i<m;i++){
//     ar1[n+i]=ar2[i]
// }
// console.log(ar1);