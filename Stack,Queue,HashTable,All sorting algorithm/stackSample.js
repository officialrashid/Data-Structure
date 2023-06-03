
class Stack {

    constructor(){

        this.top = null;
    }
    push(data){

        let newNode = { data : data , next : null}

        if(this.top == null){

            this.top = newNode
        }else{

            newNode.next = this.top
            this.top = newNode
        }
    }
    StackSort(){

        let temp = this.top
        
        let swapped = true;

        while(swapped){

            swapped = false

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
    
      
    display(){

        let temp = this.top 

        while(temp){

            console.log(temp.data);

            temp = temp.next
        }
    }
}

 const stack = new Stack()

stack.push(22)
stack.push(1)
stack.push(5)
stack.display()
stack.stackSort()

stack.display()