class graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }
  addEdges(vertex1, vertex2) {
      if (!this.adjacencyList[vertex1]) {
          this.addVertex(vertex1);
      }
      if (!this.adjacencyList[vertex2]) {
        this.addVertex(vertex2);
      }
      this.adjacencyList[vertex1].add(vertex2);
      this.adjacencyList[vertex2].add(vertex1);
    
  }
  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + "->" +[...this.adjacencyList[vertex]]);
    }
  }
}

let newgraph = new graph()
newgraph.addVertex("A")
newgraph.addEdges("A", "B")
newgraph.display()
console.log(newgraph)