class minHeap{
    constructor(){
        this.values=[]
    }
    insert(value){
        this.values.push(value);
        let idx = this.values.length-1;
        while(idx>0){
            let parentIdx = Math.floor((idx-1)/2);
            if(this.values[idx]>=this.values[parentIdx]) break;
            [this.values[idx],this.values[parentIdx]] = [this.values[parentIdx],this.values[idx]];
            idx = parentIdx;
        }
    }
    remove(){
        [this.values[0],this.values[this.values.length-1]] = [this.values[this.values.length-1],this.values[0]]
        let removed = this.values.pop();
        let idx = 0;
        while(true){
            let leftIdx = 2*idx+1;
            let leftChild = this.values[leftIdx];
            let rightIdx = 2*idx+2;
            let rightChild = this.values[rightIdx];
            let largestIdx = 0;
            if(leftChild && leftChild<this.values[idx]){
                largestIdx = leftIdx
            }else{
                largestIdx = idx;
            }
            if(rightChild && rightChild<this.values[largestIdx]){
                largestIdx = rightIdx;
            }
            if(largestIdx===idx) break;
            [this.values[idx],this.values[largestIdx]] = [this.values[largestIdx],this.values[idx]]
            idx = largestIdx;
        }
        return removed;
    }
    heapSort(heap){
        let sorted = [];
        while(heap.values.length>0){
            sorted.push(heap.remove());
        }
        console.log(sorted);
    }
}
let mx = new minHeap();
mx.insert(55);
mx.insert(200);
mx.insert(100);
mx.insert(300);
mx.insert(400);
mx.insert(600);
mx.insert(750);
mx.remove();
mx.heapSort(mx);
console.log(mx);