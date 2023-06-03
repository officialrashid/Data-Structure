class TreeNode{

    constructor(data){

        this.children =[]
        this.data = data

    }
    addChild(data){
     
    let newNode =new TreeNode(data)

    this.children.push(newNode)
       
    }
}

class Tree{

    constructor(data){

        this.root = null
    }

    addRoot(data){

        if(this.root == null){

            this.root = new TreeNode(data)

            return this.root
        }else{

            throw new Error('already done')
        }
    }
    BFSTraversal(){

        let queue=[]

        queue.push(this.root)

        while(queue.length > 0){

            let current = queue.shift()

            console.log(current.data);

            for(let child of current.children){
              
                queue.push(child)

            }
        }
    }
}

 const tree = new Tree()

 let root = tree.addRoot(100)
 let a = root.addChild(200)
 let b = root.addChild(300)
 let c = root.addChild(800)
 let d = root.addChild(900)

 tree.BFSTraversal()
 console.log(tree);