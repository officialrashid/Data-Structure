
class queue{

    constructor(){

        this.front = null
        this.rear = null
    }

    addfirst(data){

        let newNode = {data : data , next : null}

         let prev = null

        if(this.front == null){

            this.front = this.rear= newNode
        }else{

            prev = this.front

            newNode.next = this.front

            this.front = newNode
        }
    }
    display(){

        let temp = this.front

        while(temp){

            console.log(temp.data);
            temp = temp.next
        }
    }
}

list = new queue()

list.addfirst(100)
list.addfirst(200)
list.addfirst(300)

list.display()