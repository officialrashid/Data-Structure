class MinHeap{

    constructor(){

        this.values=[]
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
    leftchild(index){

        return  this.values[this.getleft(index)]
    }
    rightchild(index){

        return this.values[this.getright(index)]
    }
    parent(index){

        return this.values[this.getparent(index)]
    }
    swap(indexOne,indexTwo){

        let temp = this.values[indexOne]
        this.values[indexOne] =this.values[indexTwo]
        this.values[indexTwo] = temp
    }
    addValue(data){
     
        this.values.push(data)
        this.heapifyup()

    }
  
    heapifyup(){

        let index = this.values.length-1;
        while(this.parent(index) < this.values[index]){

            this.swap(index,this.getparent(index))

                index = this.getparent(index)
            }
        }
        remove(){

            if(this.values.length===0){

                return null;
            }
            let item = this.values[0]
            this.values[0] = this.values.pop()
            this.heapifydown();

            return item;
        }
        heapifydown(){

            let index= 0;
         
            while(this.leftchild(index) !==undefined){

                let smallChildIndex = this.getleft(index)
                
                if(this.rightchild(index) !== undefined && this.rightchild(index) > this.leftchild(index)){

                    smallChildIndex = this.getright(index)
                }
                if(this.values[index] > this.values[smallChildIndex]){

                    break;
                }else{

                    this.swap(index,smallChildIndex)
                }
                index = smallChildIndex;
            }
        }


        search(value){
         
            this.heap.forEach(element => {
                
                if(element === value){

                    console.log("value is found");
                }else{

                    return;
                }
            });

        }
        display(){

            console.log(this.heap);
        }
       


    }
 

const heap = new MinHeap()

heap.addValue(100)
heap.addValue(200)
heap.addValue(1)
heap.addValue(10)
heap.addValue(30)
heap.addValue(4)
console.log("before");
heap.heapSort(heap)
heap.display()

// console.log("After");
// heap.remove()
// heap.search(10)
// heap.display()

