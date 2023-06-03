
class BinarySearchTree{

constructor(){

    this.root = null
  
}
insert(data){
     
    let newNode = {data: data, left: null, right: null};

    if(this.root == null){
        this.root = newNode;
        return;
    }

    let temp = this.root;
  
    while(true){

        if(data < temp.data){

            if(temp.left == null){

                temp.left = newNode;
                break;
            }else{

                temp = temp.left;
            }
        }else{

           if(data > temp.data){

            if(temp.right == null){

                temp.right = newNode;
                break;
            }else{

                temp = temp.right;
            }
           }
        }
    }
}


Search(data){

    let temp = this.root

    while(temp != null){

        if(data < temp.data){

            temp = temp.left
        }else if(data > temp.data){

             temp = temp.right
        }else{
        
            return temp.data
        
        }
     
    }
   return false
   
}

delete(data) {
    this.root = this.deleteHelper(this.root, data);
}

deleteHelper(root, data) {
    if (root == null) {
        return root;
    }
    if (data < root.data) {
        root.left = this.deleteHelper(root.left, data);
    } else if (data > root.data) {
        root.right = this.deleteHelper(root.right, data);
    } else {
        if (root.left == null) {
            return root.right;
        } else if (root.right == null) {
            return root.left;
        }
        root.data = this.minData(root.right);
        root.right = this.deleteHelper(root.right, root.data);
    }
    return root;
}

minData(root){

    let minimum = root.data

    while(root.left != null){

        minimum = root.left.data
        root = root.left
    }
  return minimum
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
preOrder(){

    this.preOrderHelper(this.root)
}
preOrderHelper(newNode){

    if(newNode != null){

        console.log(newNode.data);
        this.preOrderHelper(newNode.left)
        this.preOrderHelper(newNode.right)
    }
}
postOrder(){

    this.postOrderHelper(this.root)
}
postOrderHelper(newNode){
  
    if(newNode != null){

        this.postOrderHelper(newNode.left)
        this.postOrderHelper(newNode.right)
        console.log(newNode.data);
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
    }else if(target > temp.data){

        temp = temp.right
    }else{
        break
    }
  }
  return closest
}
BFStraversal(){

    const queue =[]

    queue.push(this.root)

    while(queue.length){

        let temp = queue.shift()
        console.log(temp.data);

        if(temp.left){

            queue.push(temp.left)
        
    }
    if(temp.right){

        queue.push(temp.right)
    }
}
}
MinimumValue(root){


 let current = root

 if(current.left == null)
{
    return current.data
}    
else{

    return this.MinimumValue(current.left)
}
}
MaximumValue(root){

    let current = root

    if(current.right == null){

        return current.data
    }else{

        return this.MaximumValue(current.right)
    }
}
CheckBinarySearchTreeOrNot(){


}
IsBST(){

    let arr =[]

    this.inOrder(this.root,arr)

    for(let i=1;i<arr.length;i++){

        if(arr[i] < arr[i-1]){

            return false
        }
    }
    return true
}
primeNUmber(){

    let arr=[]

    this.inOrder(this.root,arr)

        for(let i=0;i<arr.length;i++){

            arr.push[arr[i]]
        for(let j=2;j<arr.length;j++){

            if(arr[j] % i !=0){

                console.log(arr[j]);
            }
        }

    }
    
}
}

tree = new BinarySearchTree()
tree.insert(10)
tree.insert(8)
tree.insert(11)
tree.insert(4)
tree.insert(9)
tree.insert(30)
tree.insert(50)
tree.insert(100)

tree.inOrder()
tree.primeNUmber()

// tree.BFStraversal()
// console.log("inOrde:");
// console.log("-------------------");
// tree.inOrder()

// console.log("preOrde:");
// console.log("-------------------");
// tree.preOrder()

// console.log("postOrde:");
// console.log("-------------------");
// tree.postOrder()

// tree.delete(11);
// console.log("After:");
// console.log("-------------------");
// console.log(tree.Search(100));
// tree.inOrder()
// console.log("closest value binarySearchTree:",tree.findClosest(9));

console.log(tree.IsBST());

// console.log("minimum value",tree.MinimumValue(tree.root));
// console.log("maximum value",tree.MaximumValue(tree.root));
console.log(tree);