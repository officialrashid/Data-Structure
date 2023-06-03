// class dLinkedlist{
//     constructor(){
//      this.head= null;
//      this.tail= null;
//      this.prev= null;
//     }
//     addNode(data){
     
//     let newNode={data : data ,next : null }
 
//     if(!this.head){
//      this.head = newNode
//     }else{
//      this.tail.next = newNode;
//      newNode.prev=this.tail
//     }
//      this.tail=newNode
//     }
//     display(){
//      if(!this.head){
//          console.log("Empty");
//      }else{
//          let temp = this.head;
//          while(temp != null){
//              console.log(temp.data);
//              temp = temp.next;
//          }
//      }
//     }
//  }
 
//  let list = new dLinkedlist();
 
//  list.addNode(100)
//  list.addNode(200)
//  list.addNode(300)
 
//  list.display()

class dLinkedlist{

 constructor(){

    this.head = null;
    this.tail=null;
    this.prev = null;
 }
 addNode(data){

    let newNode={data : data,next: null}

    if(!this.head){

        this.head = newNode

    }else{

        this.tail.next = newNode
        newNode.prev = this.tail
    }
    this.tail=newNode
 }
 display(){

    let temp=this.tail

    while(temp){

        if(!this.head){

            console.log("Empty");
        }else{

            console.log(temp.data);
            temp=temp.prev
        }
    }
 }
}

let list =new dLinkedlist()

list.addNode(1000)
list.addNode(2000)
list.addNode(3000)
list.addNode(4000)

list.display()