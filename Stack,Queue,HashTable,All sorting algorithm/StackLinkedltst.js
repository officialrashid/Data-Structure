class Stack{

    constructor(){

        this.top = null
    }
    push(data){

        let newNode = {data : data , next : null}

        if(this.top == null){

            this.top = newNode
        }else{

            newNode.next = this.top

            this.top = newNode
        }
    }
    pop(){
           
        if(this.top == null){

            console.log("Stack is Empty");
        }
       else{

        this.top= this.top.next
       }
}
StackToConvertqueue(){

    let temp = this.top

     this.front = null 
     this.rear = null

    while(temp){
let newNode={data : temp.data ,next:null}
       if(this.front == null){

        this.front = this.rear = newNode 
       }else{

      newNode.next = this.front
        this.front = newNode
       }
       temp = temp.next
    }
}
sort(){

  
    let swapped =true
    while(swapped){
    swapped = false
    let temp = this.top
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
midleElement(){

    let temp = this.top
    let count=0
    while(temp){
    
        let newNode ={data: temp.data ,next:null}
      count++

      temp = temp.next
    }
    let mid = Math.floor(count/2)
     temp = this.top
     let prev = null                
    for(let i=0;i<mid;i++){
      
        prev = temp
        temp = temp.next

    }
    prev.next = temp.next
}
// reverse(){

//     let temp = this.top

//     let prev = null
//     let  next = null

//     while(temp){
 
//     next = temp.next
//     temp.next = prev
//     prev = temp
//     temp = next
        
//     }
//     this.top = prev
// }
primeNUmberPrint(){
    let temp = this.top;

  while(temp){
   
    
   let isPrime = true
    for(let i=2;i<=Math.sqrt(temp.data);i++){

       if(temp.data % i ===0){
           
        isPrime = false

        break;
      
    }
  
}
if(isPrime && temp.data > 1){

    console.log(temp.data);
}
temp = temp.next
}
}
display(){

    let temp = this.top

    while(temp){

        console.log(temp.data);

        temp = temp.next
    }
}
}

const stack = new Stack()
console.log("before");
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(7)
stack.display()
console.log("After");
// stack.primeNUmberPrint()

// stack.display()

// stack.pop()
stack.StackToConvertqueue()
// stack.sort()
// console.log("After:");
// stack.reverse()

// stack.midleElement()
stack.display()
console.log(stack);

