class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  
    addChild(value) {
        const newNode = new TreeNode(value);
        this.children.push(newNode);
        return newNode;
      }
      
      
  }
  
  class Tree {
    constructor() {
      this.root = null;
    }
  
    addRoot(value) {
      if (this.root === null) {
        this.root = new TreeNode(value);
        return this.root;
      } else {
        throw new Error('Root node is already defined');
      }
    }
    BFStraversal() {
        const queue = [this.root];
    
        while (queue.length) {
          const node = queue.shift();
          console.log(node.value);
    
          for (let child of node.children) {
            queue.push(child);
          }
        }
      }
     
  
  }
  
  const tree = new Tree();

  const root = tree.addRoot(10);
  const b = root.addChild(20);
  const h = root.addChild(30);
  const i = root.addChild(100);
  const c = root.addChild(200);
  const d = b.addChild(40);
  const e = b.addChild(4);
  const f = c.addChild(2);
  const g = c.addChild(6);
  const r = e.addChild(1000)
  const x = e.addChild(3000)
  const y = e.addChild(5000)
 tree.inOrder()

 console.log(tree.isBST());
  