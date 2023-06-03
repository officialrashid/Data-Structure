

// class SLinkedlist{

//     constructor(){

//         this.head = null;
//         this.tail=null;
//     }

//     addNode(data){

//         let newNode ={data : data ,next : null}

//         if(!this.head){

//             this.head = newNode

//         }else{

//             this.tail.next=newNode
//         }
//         this.tail=newNode
//     }
//     display(){

//         let temp=this.head

//         while(temp){

//             console.log(temp.data);

//             temp=temp.next
//         }
//     }
// }
// list = new SLinkedlist()

// list.addNode(100)
// list.addNode(200)
// list.addNode(300)
// list.addNode(50)

// list.display()

// console.log(list);

class SLinkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addNode(data) {
    let newNode = { data: data, next: null };
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }

  display() {
    let temp = this.head;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }

//   bubbleSort() {
//     let swapped = true;
//     while (swapped) {

//       swapped = false;

//       let current = this.head;
//       while (current && current.next) {

//         if (current.data > current.next.data) {

//           let temp = current.data;
//           current.data = current.next.data;
//           current.next.data = temp;
//           swapped = true;
//         }
//         current = current.next;
//       }
//     }
//   }
insertionSort() {
    let sortedList = new SLinkedlist();
    let current = this.head;

    while (current) {
      let nextNode = current.next;
      current.next = null;

      if (!sortedList.head) {
        sortedList.head = current;
        sortedList.tail = current;
      } else if (current.data < sortedList.head.data) {
        current.next = sortedList.head;
        sortedList.head = current;
      } else {
        let temp = sortedList.head;
        while (temp.next && current.data > temp.next.data) {
          temp = temp.next;
        }
        current.next = temp.next;
        temp.next = current;
        if (!current.next) {
          sortedList.tail = current;
        }
      }

      current = nextNode;
    }

    this.head = sortedList.head;
    this.tail = sortedList.tail;
  }

}

let list = new SLinkedlist();
list.addNode(100);
list.addNode(200);
list.addNode(300);
list.addNode(50);

console.log("Before sorting:");
list.display();
list.insertionSort();
console.log("After sorting:");
list.display();
console.log(list);



