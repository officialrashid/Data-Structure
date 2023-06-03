
class queue{

    constructor(){

        this.front = null
        this.rear = null
    }
    enqueue(data){

        let newNode ={data : data ,next :null}

        if(this.front == null){

            this.front = this.rear = newNode
        }else{

            this.rear.next = newNode
            this.rear = newNode
        }
    }
    dequeue(){

        if(this.front == null){

            console.log("queue is empty");
        }else{

            this.front = this.front.next
        }
    }
    queueToconvertStack(){

        let temp = this.front
         this.top = null
        while(temp){
             
            let newNode = {data : temp.data,next : null}
            if(this.top == null){

                this.top = newNode
            }else{ 

                newNode.next = this.top
                this.top = newNode
            }
           temp = temp.next
        }
    }
    MidleElement(){

        let temp = this.front
        let prev = null
        let count =0
        while(temp){
        //  let newNode ={data : temp.data ,next : null}
           count++
           temp = temp.next
        }
        let mid = Math.floor(count/2)
           temp = this.front
        for(let i=0;i<mid;i++){

            prev = temp 
            temp = temp.next
        }
        prev.next = temp.next
    }
    sort(){
     
        let swapped =true
        while(swapped){

            swapped = false
             let temp = this.front
            while(temp && temp.next){

                if(temp.data > temp.next.data){

                    let temp1 = temp.data
                    temp.data = temp.next.data
                    temp.next.data = temp1

                    swapped = true
                }
                temp = temp.next
            }

        }

    }
    display(){

        let temp = this.front

        if(this.front == null){

            console.log("Empty");
        }else{

            while(temp){

                console.log(temp.data);
                temp = temp.next
            }
        }
    }
    

}

 list = new queue()

 list.enqueue(200)
 list.enqueue(100)
 list.enqueue(300)
 list.enqueue(400)
// list.queueToconvertStack()
// list.MidleElement()
list.sort()
 list.display()

 
console.log(list);