// class queue{

//     constructor(){

//         this.front = null;
//         this.rear = null;
//     }

//     enqueue(data){

//         let newNode ={data : data , next : null}

//         if(this.rear == null){

//             this.front= this.rear = newNode
//         }else{

//             this.rear.next = newNode

//             this.rear=newNode
//         }
//     }
//     dequeue(){

//         if(this.front==null){

//             console.log("Empty");
//             this.rear = null;
//         }
//         else{

//             this.front = this.front.next
//         }
        
//     }
//     display(){

//         let temp = this.front;

//         while(temp){

//             console.log(temp.data);

//             temp = temp.next
//         }
//     }
// }

// list = new queue()

// list.enqueue(1000)
// list.enqueue(2000)
// list.enqueue(3000)
// list.enqueue(4000)

// list.dequeue()

// list.display()

// console.log(list);

class queue{

    constructor(){

        this.front = null;
        this.rear = null;
    }

    enqueue(data){

     let newNode= {data : data , next : null}

     if(this.front == null){

        this.front = newNode
     }else{

        this.rear.next = newNode
       
     }
     this.rear = newNode
    }
    dequeue(){

        if(this.front==null){

            console.log("empty");
        }else{

            this.front=this.front.next
        }
    }
    queueToConvertStack(){

        if(this.front == null){

            console.log("Empty");
        }else{

            let temp = this.front
            this.top = null

            while(temp){
               
                let newNode={data:temp.data,next:null}

                if(this.top == null){

                    this.top = newNode
           
                }else{

                    newNode.next =this.top
                    this.top = newNode
                   
                }
                temp=temp.next
            }
           
        }
    }
    display(){

        let temp = this.front

        while(temp){

            console.log(temp.data);
            temp = temp.next
        }
    }
    midleElementqueue(){

        let count =0;
        let temp = this.front

        while(temp){

            count++
            temp = temp.next
        }
        let mid = Math.floor(count/2)
         let prev = null
         temp = this.front
        for(let i=0;i<mid;i++){

          prev = temp 
          temp = temp.next
        }
       prev.next = temp.next
        
    }
}

list = new queue()

list.enqueue(1000)
list.enqueue(2000)
list.enqueue(3000)
// list.enqueue(4000)
// list.enqueue(5000)

// list.dequeue()
// list.dequeue()
// list.queueToConvertStack()
list.midleElementqueue()
list.display()

console.log(list);