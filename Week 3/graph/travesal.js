class graph {
    constructor() {
        this.List = {};
    }
    addVertex(vertex) {
        if (!this.List[vertex]) {
            this.List[vertex] = new Set()
        }
    }
    addEdges(vertex1, vertex2) {
        if (!this.List[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.List[vertex2]) {
            this.addVertex(vertex2)
        }
        this.List[vertex1].add(vertex2)
        this.List[vertex2].add(vertex1)

    }
    DFS(start) {
        const visitd = new Set()
        this.DfsHelper(start,visitd)
    }
    DfsHelper(node, visitd) {
        visitd.add(node)
        console.log(node)
        for (let nigbor of this.List[node]) {
            if (!visitd.has(nigbor)) {
                this.DfsHelper(nigbor,visitd)
            }
        }
    }
}

let newgraph = new graph()
newgraph.addVertex("A")
newgraph.addVertex("B")
newgraph.addEdges("A", "B")
newgraph.addEdges("A", "c");
newgraph.DFS("A")