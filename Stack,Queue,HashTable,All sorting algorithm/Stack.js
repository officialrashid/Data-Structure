
class queue{

    constructor(){

      this.array=[]  
    }
    push(data){

        this.array.push(data)
    }
    shift(){

        this.array.shift()
    }
    print(){

        console.log(this.array.toString())
    }
}
list = new queue()

list.push(100)
list.push(200)
list.push(300)
list.shift()
list.print()