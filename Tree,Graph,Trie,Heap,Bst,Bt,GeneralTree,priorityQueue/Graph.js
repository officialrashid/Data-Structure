
class Graph{

constructor(){

    this.map = new Map()
}
addVertex(data){

    this.map.set(data ,[])
}
insert(vertex,edge,isBidirectional){

    if(!this.map.has(vertex)){

        this.addVertex(vertex)
    }
    if(!this.map.has(edge)){

        this.addVertex(edge)
    }
    this.map.get(vertex).push(edge)

    if(isBidirectional){

        this.map.get(edge).push(vertex)
    }
}

removeVertex(vertex){

  this.map.delete(vertex)

  this.map.forEach(edge=>{

    if(this.map.has(vertex)){

      this.edge.delete(edge);
    }
  })
}
removeEdge(vertex,edge){

  const vertexEdges = this.map.get(vertex)
  const edgeEdges = this.map.get(edge)

  if(vertexEdges && edgeEdges){

    vertexEdges.splice(vertexEdges.indexOf(edge),1)

    edgeEdges.splice(edgeEdges.indexOf(vertex),1)
  }
}

bfsTraversal(startNode){

  const queue =[startNode]

  const visited ={}

  visited[startNode] = true

  while(queue.length>0){

    const current = queue.shift()

    console.log(current);
     
  
    const temp = this.map.get(current)

    if(temp){
       
      temp.forEach(element =>{
      
        if(!visited[element]){

          visited[element] = true
          queue.push(element)
        }
      })
      
    }
  }
}
 dfsTraversal(startNode,data) {
  const stack = [startNode];
  const visited = {};
  visited[startNode] = true;

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);

    const temp = this.map.get(current);
   
     
      if (temp) {
        temp.forEach(temp => {
          if (!visited[temp]) {
            visited[temp] = true;
            stack.push(temp);
          }
        });
      }

   
 
  }
}



  display(){

    for(let [vertex,edge] of this.map.entries()){

        console.log(vertex +":"+ edge.join(" "));
    }
}
}




const graph = new Graph()
console.log("before");
graph.insert(3,5,true)
graph.insert(4,3,true)
graph.insert(5,6,true)
graph.insert(5,7,true)
graph.insert(7,8,false)

graph.bfsTraversal(3)
// graph.display()

console.log("After:");

// graph.removeVertex(3)
// graph.removeEdge(3,5)

graph.dfsTraversal(3)

// graph.display()

console.log(graph);