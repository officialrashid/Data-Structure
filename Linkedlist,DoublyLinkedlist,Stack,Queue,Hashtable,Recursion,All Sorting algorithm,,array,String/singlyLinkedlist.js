
// // let arr =[]
// class SLinkedlist{

//     constructor(){

//         this.head=null;
//         this.tail=null;

//     }

//     addNode(data){
         
//         let largest=0
//         let newNode={data : data ,next : null}
         
//         if(!this.head){

//             this.head = newNode
            
//         }else{

//             this.tail.next = newNode
//         }
//         this.tail = newNode
         
//     }
    
//     // reversePrint(){

//     //    let temp = this.head
//     //    let prev = null;

//     //    while(temp){

       

//     //    }

//     // }
//     // largestAndSecondLargest(){

//     //    let temp=this.head
//     // let largest =0;
//     // let SecondLargest=0;
//     //     while(temp){

//     //         if(temp.data > largest){
//     //         SecondLargest = largest
//     //         largest=temp.data
          
//     //         }if( temp.data <largest && temp.data>SecondLargest){
          
//     //             SecondLargest = temp.data;
               
//     //         }
            
//     //         temp = temp.next

//     //     }
//     //     console.log("largest number is :",largest);
//     //     console.log("SecondLargest is :",SecondLargest);
//     // }
   

//     display(){

//         if(!this.head){

//             console.log("Empty");
//         }else{

//             let temp= this.head

//             while(temp){

//                 console.log(temp.data);

//                 temp = temp.next
//             }
//         }
//     }


// //     InsertPrepend(data){

// //     let newNode = {data :data , next :null}

// //    let temp = this. head

// //      if(!this.head){

// //         this.head = newNode
// //         this.tail= newNode
    
// //      }else{

// //         newNode.next=this.head
// //         this.head=newNode
// //      }
   
// //     }


//     // InsertAppend(data){

//     //     let newNode = {data : data ,next : null}
         
//     //    let temp= this.head;
     

//     //     if(!this.head){

//     //         this.head = newNode
        
//     //     }else {
         
//     //         this.tail.next = newNode

//     //     }
//     //     this.tail= newNode
//     // }
//     // arrayToLinkedlist(arr){

//     //     arr.forEach(element => {
            
//     //         this.InsertAppend(element)

//     //     });

//     // }

  


//     DuplicateElements(){

//         let temp = this.head;
//         let sets = new Set()
//         let prev = null;
//      while(temp){
     
        
//        if(sets.has(temp.data)){
      
//         // console.log("DuplicateElements",temp.data);

//         prev.next = temp.next
//        }else{

//         sets.add(temp.data)
//         prev= temp
//        }
//        temp = temp.next;
//     }
  
//     }

//     InsertPosition(data,position){
//         let newNode = {data : data ,next : null,position}
//         let temp = this.head;

//         if(position == 0){

//             newNode.next=this.head
//             this.head=newNode
//         }else{

//           for(let i=0;i<position-1;i++){

//             temp =temp.next

//           }
//           if(temp == null){

//             return
//           }
//           newNode.next = temp.next;
//         temp.next = newNode;
//         }
//     }

//     removeDuplicates(){
      
       
//       let temp=this.head
//       let prev = null
//       let sets = new Set()
//       while(temp){
      
//         if(sets.has(temp.data)){

//             prev.next = temp.next
//         }else{

//             sets.add(temp)

//             prev= temp
//         }
//         temp=temp.next
//       }

//     }
//     reversePrint(){
//         let current = this.head;
//         let prev = null;
//         let next = null;
     
//         while(current){
//            next = current.next;
//            current.next = prev;
//            prev = current;
//            current = next;
//         }
//         this.head = prev;
//         let temp = this.head;
//         while(temp){
//            console.log(temp.data,"reverese print");
//            temp = temp.next;
//         }
//      }
     
// }

// list = new SLinkedlist()

// list.addNode(4000)
// list.addNode(2000)
// list.addNode(4000)
// list.addNode(3000)

// list.DuplicateElements()
// list.arrayToLinkedlist(arr)
// list.InsertPrepend(800000)
// list.InsertPrepend(5000)
// list.InsertPrepend(6000)

// list.InsertAppend(8000)
// list.InsertAppend(9000)
// list.InsertAppend(10000)

// list.InsertPosition(500,2)
// list.reversePrint()

// list.removeDuplicates()


// list.display()

// console.log(list);
// list.DuplicateElements()
// list.largestAndSecondLargest()












class SLinkedlist{

    constructor(){

        this.head = null;
        this.tail=null;
    }

    addNode(data){

        let newNode={data:data , next : null}

        if(!this.head){

            this.head=newNode
        }else{

            this.tail.next=newNode
        }
        this.tail=newNode
    }
    display(){

        let temp=this.head
        if(!this.head){

            console.log("Empty");
        }else{

     
        while(temp){

            console.log(temp.data);
            temp=temp.next
        }

    }
      
    }
    Append(data){
    
        let newNode={data : data ,next : null}

        if(!this.head){

            this.head = newNode

        }else{

          this.tail.next = newNode
          this.tail = newNode
        }
         
    }
    prepend(data){

        let newNode={data : data ,next : null}

        if(!this.head){

            this.head = newNode
        }else{

            newNode.next=this.head
            this.head = newNode
        }

    }
  InsertPosition(data,position){
        let newNode = {data : data ,next : null,position}
        let temp = this.head;

        if(position == 0){

            newNode.next=this.head
            this.head=newNode
        }else{

          for(let i=0;i<position-1;i++){

            temp =temp.next

          }
          if(temp == null){

           return
          }
          newNode.next = temp.next;
        temp.next = newNode;
        }
    }
    largestAndSecondLargest(){

        let temp=this.head
        let largest =0
        let Slargest=0
        while(temp){

            if(temp.data > largest){
                
                Slargest = largest
                largest = temp.data
            }
            else if(temp.data < largest && temp.data > Slargest){


            Slargest = temp.data
            }
            temp= temp.next
        }
      console.log(largest,"largest");
      console.log(Slargest,"second largest");
    }
    
    arrayToConvertLinkedlist(array){
    
        array.forEach(element => {
            
            this.addNode(element)
        });

    }
    LinkedlistToConvertArray(){
  
        let array=[]

        let temp=this.head

        while(temp){

            array.push(temp.data)
            temp=temp.next
        }
        console.log(array);
    }

 DuplicateElements(){
    
    let temp=this.head
    
    let sets = new Set()
    while(temp){
     
        if(sets.has(temp.data)){

            console.log(temp.data,"Duplicate Elements");
        }else{

            sets.add(temp.data)
        }
        temp=temp.next
    }
   
 }
 DuplicateElementDelete(){

    let temp=this.head

    let sets=new Set()
    
    let prev = null
    while(temp){

        if(sets.has(temp.data)){

            prev.next = temp.next
        }else{

            sets.add(temp.data)

            prev = temp
        }
       temp = temp.next
    }
 }
 SLinkedlistReverse(){

    let temp=this.head;
    let prev=null
    let next =null;

    while(temp){

        next = temp.next;
        temp.next= prev
        prev = temp
        temp=next

    }
    this.head = prev;
    temp=this.head
    while(temp){

        console.log(temp.data,"revesese printig");

        temp=temp.next
    }
 }

}


array=[1000,2000,3000,4000]
list = new SLinkedlist()

list.addNode(100)
list.addNode(200)
list.addNode(300)


// list.Append(1000)

// list.prepend(2000)

// list.InsertPosition(3000,3)

// list.largestAndSecondLargest()

// list.arrayToConvertLinkedlist(array)

// list.LinkedlistToConvertArray()
// list.DuplicateElements()

// list.DuplicateElementDelete()
list.SLinkedlistReverse()
// list.display()
console.log(list);