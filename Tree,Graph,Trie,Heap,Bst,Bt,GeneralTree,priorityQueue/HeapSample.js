class Minheap{
 
    constructor(){

        this.heap =[]

    }

    getleft(parentIndex){

        return 2*(parentIndex)+1
    }
    getright(parentIndex){

        return 2*(parentIndex)+2
    }
  getparent(childIndex){

    return Math.floor((childIndex-1)/2)
  }
  leftChild(index){

    return this.heap[this.getleft(index)]
  }
  rightChild(index){

    return this.heap[this.getright(index)]
  }
  parent(index){

    return this.heap[this.getparent(index)]

  }
  addValue(data){

    this.heap.push(data)
    this.heaifyup()
  }
  heaifyup(){

    let index = this.heap.length-1
     
    while(this.parent(index) > this.heap[index]){

        swap(index,this.getparent(index))

        index = this.getparent(index)
    }

  }
  swap(indexOne,indexTwo){

    let temp = this.heap[indexOne]
    this.heap[indexOne] = this.heap[indexTwo]
    this.heap[indexTwo] = temp
  }
  display(){

    console.log(this.heap);
  }
  IntegerNot(){
   
    for(let i=0;i<this.heap.length;i++){
      
        
        
    }
  }
}
const heap = new Minheap()

heap.addValue(100)
heap.addValue(300)
heap.addValue(150)
heap.addValue(400)
heap.display()