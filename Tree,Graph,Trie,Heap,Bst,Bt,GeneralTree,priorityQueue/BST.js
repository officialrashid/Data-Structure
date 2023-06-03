class BinarySearchTree{

    constructor(){

        this.root= null
    }

    insert(data){

        let newNode = {data : data ,left : null,right:null}

        if(this.root == null){

            this.root =  newNode;

            return
        }
        let temp = this.root

        while(temp){

            if(data < temp.data){

                if(temp.left == null){

                    temp.left = newNode
                }else{

                    temp=temp.left
                    
                    continue;
                }
            }else{

                if(data > temp.data){

                    if(temp.right == null){

                       temp.right = newNode
                    }else{

                        temp = temp.right
                        continue;
                    }
                }
            }
            break;
        }
    }
    findClosest(target){
     
        let temp = this.root
         
        let closest = temp.data

        while(temp != null){

            if(Math.abs(target - closest) > Math.abs(target - temp.data)){

                closest = temp.data
            }
            if(target < temp.data){

                temp = temp.left
            }
            if(target > temp.data){

               temp = temp.right
            }

        }
        return closest

    }
    isBST(){

        let arr =[]

        this.inOrder(this.root,arr)

        for(let i=1;i<arr.length;i++){
             
            if(arr[i] < arr[i-1]){

                return false
            }

        }
        return true
    }
    inOrder(){
   
        this.inOrderHelper(this.root)

    }
    inOrderHelper(newNode){

         if(newNode != null){

            this.inOrderHelper(newNode.left)
            console.log(newNode.data);
            this.inOrderHelper(newNode.right)
         }
    }
    BFSTraversal(){

   
        const queue =[]

        queue.push(this.root)

        while(queue.length > 0){

            let current = queue.shift()

            console.log(current.data);

           if(current.left){

            queue.push(current.left)
           }
           if(current.right){

            queue.push(current.right)
           }
        }
    }
    MaxNumber(root){

        if(root.right == null){

            return root.data
        }else{

            return this.MaxNumber(root.right)
        }
    }
    serach(data){

         let temp = this.root

         while(temp){

            if(data < temp.data){

                temp = temp.left
            }
            if(data > temp.data){

                temp = temp.right
            }else{

                return true
            }
         }
         return false
    }
    
}
const tree = new BinarySearchTree()

tree.insert(100)

tree.insert(30)

tree.insert(110)

tree.insert(20)

tree.insert(40)
// tree.inOrder()
tree.BFSTraversal()
// console.log(tree.findClosest(50),"closest");
// console.log(tree.isBST(),"bst");
console.log(tree.MaxNumber(tree.root),"max");
console.log(tree.serach(20),"search");