class Graph{

  constructor(){

    this.map = new Map()

  }
  addValue(data){

    this.map.set(data,[])
  }
  insert(vertex,edge,isBidirectional){

    if(!this.map.has(vertex)){

      this.addValue(vertex)
    }
    if(!this.map.has(edge)){

      this.addValue(edge)
    }
    this.map.get(vertex).push(edge)

    if(isBidirectional){

      this.map.get(edge).push(vertex)
    }
  }
  BFSTraversal(startNode){
     
   let queue = [startNode]
   let visited={}
   visited[startNode]=true

   while(queue.length > 0){

    let current= queue.shift()

    console.log(current);

    let temp = this.map.get(current)

    if(temp){

      temp.forEach(element => {
          
        if(!visited[element]){

          visited[element] = true

          queue.push(element)
        }
      });
    }
   }
  }
}
const graph = new Graph()

graph.insert(100,50,true)
graph.insert(50,90,true)
graph.insert(90,70,true)
graph.insert(70,55,false)

graph.BFSTraversal(100)