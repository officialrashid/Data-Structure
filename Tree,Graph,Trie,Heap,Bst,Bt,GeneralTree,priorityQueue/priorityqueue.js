class PriorityQueue {
    constructor() {
      this.heap = [];
    }
  
    getLeft(parentIndex) {
      return 2 * parentIndex + 1;
    }
  
    getRight(parentIndex) {
      return 2 * parentIndex + 2;
    }
  
    getParent(childIndex) {
      return Math.floor((childIndex - 1) / 2);
    }
  
    leftChild(index) {
      return this.heap[this.getLeft(index)];
    }
  
    rightChild(index) {
      return this.heap[this.getRight(index)];
    }
  
    parent(index) {
      return this.heap[this.getParent(index)];
    }
  
    enqueue(priority, data) {
      const node = { priority, data };
      this.heap.push(node);
      this.heapifyUp();
    }
  
    dequeue() {
      const item = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
      return item.data;
    }
  
    heapifyUp() {
      let index = this.heap.length - 1;
  
      while (this.parent(index) && this.parent(index).priority < this.heap[index].priority) {
        this.swap(index, this.getParent(index));
        index = this.getParent(index);
      }
    }
  
    heapifyDown() {
      let index = 0;
  
      while (this.leftChild(index)) {
        let maxIndex = this.getLeft(index);
  
        if (
          this.rightChild(index) &&
          this.rightChild(index).priority > this.leftChild(index).priority
        ) {
          maxIndex = this.getRight(index);
        }
  
        if (this.heap[index].priority > this.heap[maxIndex].priority) {
          break;
        } else {
          this.swap(index, maxIndex);
        }
  
        index = maxIndex;
      }
    }
  
    swap(index1, index2) {
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
  
    display() {
      console.log(this.heap);
    }
  }
const heap = new PriorityQueue()  

heap.enqueue(3, 5);
heap.enqueue(1, 10);
heap.enqueue(2, 7);


heap.display()