// class HashTable{

//     constructor(size){

//         this.table = new Array(size)
//         this.size = size
//     }
//  hash(key){
  
//     let total =0;

//     for(let i=0;i<key.length;i++){

//         total += key.charCodeAt(i)

//     }
//     return total % this.size

//  }
//     set(key , value){

//         let index = this.hash(key)
//         // this.table[index] = value
//         let bucket = this.table[index]
//         if(!bucket){

//         this.table[index] = [[key , value]]  
//         }else{

//           const sameKey = bucket.find(item => item[0] === key)

//           if(sameKey){

//             sameKey[1] = value
//           }else{

//             bucket.push([key,value])
//           }
//         }
//     }
//     get(key){

//         let index = this.hash(key)

//         // return this.table[index]

//         let bucket = this.table[index]

//         if(bucket){

//           const sameKey = bucket.find(item => item[0] === key)

//           if(sameKey){

//             return sameKey[1]
//           }
//         }
//       return undefined
//     }
//     remove(key){

//   let index = this.hash(key)

//   // this.table[index] =undefined
//   let bucket = this.table[index]

//   if(bucket){

//     const sameKey = bucket.find(item => item[0] === key)

//     if(sameKey){

//       bucket.splice(bucket.indexOf(sameKey),1)
//     }
//   }
//     }
//   display(){

//     for(let i=0;i<this.table.length;i++){
        
//         if(this.table[i])
//         console.log(i,this.table[i]);
//     }
//   }
// }

// const hashTable = new HashTable(50)

// console.log(hashTable.set("name" , "rashid"));
// console.log(hashTable.set("age" , 19));
// console.log(hashTable.set("work" , "brototype"));
// console.log(hashTable.set("salary" , 50000));
// console.log(hashTable.set("position" , "Manager"));
// console.log("before");
// hashTable.display() 
// console.log("after");
// console.log(hashTable.get("work"));

// console.log("before ....:");
// hashTable.remove("age");

// console.log("After...:");
 
// hashTable.display()

class HashTable{

  constructor(size){

    this.table = new Array(size)
    this.size = size
  }
  hash(key){

    let total =0;

    for(let i=0;i<key.length;i++){


      total += key.charCodeAt(i)
    }
    return total % this.size
  }
  set(key , value){
   
    let index = this.hash(key)

    let bucket = this.table[index]

    if(!bucket){
    
      this.table[index] = [[key,value]]

    }else{

      const sameKey = bucket.find(item => item[0] === key)

      if(sameKey){

        sameKey [1] = value
      }else{

        bucket.push([key , value])
      }
    }
    
  }
  get(key){

   let index = this.hash(key)

  let bucket = this.table[index]

  if(bucket){

    const sameKey = bucket.find(item => item[0] === key)

    if(sameKey){

      return sameKey[1]
    }
  }
  return undefined
  }
  remove(key){

    let index = this.hash(key)
    
    let bucket = this.table[index]

    if(bucket){

     const sameKey = bucket.find(item => item[0] === key)

     if(sameKey){

      bucket.splice(bucket.indexOf(sameKey),1)
     }
    }
  
  }
  display(){

    for(let i=0;i<this.table.length;i++){

      if(this.table[i]){

        console.log(i,this.table[i]);
      }
    }
  }
}

const hashTable = new  HashTable(6)

hashTable.set("name","rashid");
hashTable.set("age",19);
hashTable.set("place","malappuram");
console.log("before");
hashTable.display()
console.log("get value",hashTable.get("name"));
console.log("After");
hashTable.remove("place");

hashTable.display()