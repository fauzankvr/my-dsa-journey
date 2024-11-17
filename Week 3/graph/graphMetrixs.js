class Graph {
  constructor() {
    this.adjacencyMetrics = []; 
    this.vertexIndices = {}; 
    this.size = 0;
  }

  addVertex(vertex) {
    if (this.vertexIndices[vertex] !== undefined) {
      console.log("Vertex already exists");
      return;
    }

    this.vertexIndices[vertex] = this.size;
    this.size++;

    for (let row of this.adjacencyMetrics) {
      row.push(0); 
    }
    this.adjacencyMetrics.push(new Array(this.size).fill(0)); 

    console.log(`Vertex ${vertex} added`);
  }

  addEdge(vertex1, vertex2) {
    if (this.vertexIndices[vertex1] === undefined) {
      this.addVertex(vertex1);
    }
    if (this.vertexIndices[vertex2] === undefined) {
      this.addVertex(vertex2);
    }

    const index1 = this.vertexIndices[vertex1];
    const index2 = this.vertexIndices[vertex2];

    this.adjacencyMetrics[index1][index2] = 1;
    this.adjacencyMetrics[index2][index1] = 1; 

    console.log(`Edge added between ${vertex1} and ${vertex2}`);
  }

  display() {
    const vertices = Object.keys(this.vertexIndices);
    console.log("Adjacency Matrix:");
    console.log("  ", vertices.join(" "));

    for (let i = 0; i < this.size; i++) {
      const row = this.adjacencyMetrics[i];
      console.log(vertices[i] + "  " + row.join(" "));
    }
  }
}


const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("B", "C"); 
graph.display();

console.log(graph);

