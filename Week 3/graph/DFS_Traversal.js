class Graph{
    constructor() {
        this.list = {}
    }
    addVertex(vetex) {
        if (!this.list[vetex]) {
            this.list[vetex]=new Set()
        }
    }
    addEdge(vertex1, vertex2) {
        if (!this.list[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.list[vertex2]) {
            this.addVertex(vertex2)
        }
        this.list[vertex1].add(vertex2)
        this.list[vertex2].add(vertex1)
    }
    DFS(node, visited = new Set()) {
        if (visited.has(node))  return
        console.log(node)
        visited.add(node)
        for (let neighbor of this.list[node]) {
            this.DFS( neighbor, visited);
        }
    }
}

let newgraph = new Graph()
newgraph.addEdge('a', 'b');
newgraph.addEdge('c', 'd');
newgraph.addEdge("c",'b');

newgraph.DFS('a')
