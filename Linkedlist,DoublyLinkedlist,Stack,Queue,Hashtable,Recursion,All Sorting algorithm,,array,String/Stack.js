
// class Stack{

//     constructor(){

//         this.top=null;
//     }

//     push(data){
     
//     let newNode={data : data,next:null}

//     if(this.top==null){

//         this.top=newNode
//     }
//     else{

//         newNode.next=this.top
//         this.top=newNode
//     }
//     this.top=newNode

//     }



//     pop(){

//     if(this.top == null){

//         console.log("stack Underflow");

//         return
//     }else{

//         this.top = this.top.next
//     }


//     }
  
//     display(){

//         let temp = this.top

//         while(temp){

//             console.log(temp.data);

//             temp=temp.next;
//         }
//     }
    sort() {
        let swapped = true;
        while (swapped) {
          swapped = false;
          let temp = this.top;
          while (temp && temp.next) {
            if (temp.data > temp.next.data) {
              let temp1 = temp.data;
              temp.data = temp.next.data;
              temp.next.data = temp1;
              swapped = true;
            }
            temp = temp.next;
          }
        }
        
      }
}



// list = new Stack()

// list.push(100)
// list.push(200)
// list.push(300)
// list.push(30)
// list.push(50)
// list.display()
// list.sort()
// list.pop()
// list.display()

// console.log(list);

class Stack{

  constructor(){

    this.top = null
  }

  push(data){
  
    let newNode={data:data ,next : null}

    if(this.top==null){

      this.top = newNode
    }else{

      newNode.next = this.top
      this.top = newNode
    }
    this.top = newNode

  }
  pop(){

    if(this.top == null){

      console.log("Stack is underflow");
    }
    else{

      this.top = this.top.next
      
    }
  }
  stackToConvertqueue() {
    if (this.top == null) {
      console.log("empty");
    } else {
      let temp = this.top;
      this.front = null;
      this.rear = null;
  
      while (temp) {
        let newNode = { data: temp.data, next: null };
        if (this.front == null) {
          this.front = this.rear = newNode;
        } else {
          this.rear.next = newNode;
          this.rear = newNode;
        }
        temp = temp.next;
      }
    }
  }
  
  display(){

    let temp = this.top

  

      while(temp){
      
        console.log(temp.data);

        temp = temp.next
      }
    }
    midleElementStack(){

     let count = 0;
   let temp = this.top
     while(temp){

      count++;

      temp = temp.next
     }
    let mid = Math.floor(count/2);

     temp = this.top
     let prev = null
     for(let i=0;i<mid;i++){

        prev = temp
        temp = temp.next
     }
     prev.next = temp.next

  }

}
list = new Stack()

list.push(100)
list.push(200)
list.push(300)
list.push(400)
list.push(500)
list.push(600)
list.push(700)




// list.display()
// list.pop()
// list.stackToConvertqueue()
// list.midleElementStack()
list.display()


console.log(list);

