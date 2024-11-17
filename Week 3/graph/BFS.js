class graph {
    constructor() {
        this.list = {}
    }
    addVertex(vertex) {
        if (!this.list[vertex]) {
            this.list[vertex]=new Set()
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
    BFS(start) {
        const visitd = new Set()
        const queue = []
        queue.push(start)
        while (queue.length > 0) {
            let node = queue.shift()
            if (!visitd.has(node)) {
                visitd.add(node)
                console.log(node)
                
                for (let nigbor of this.list[node]) {
                    if (!visitd.has(nigbor)) {
                        queue.push(nigbor)
                    }
                }
            }
        }
    }
}

let newgraph = new graph()
newgraph.addVertex("A")
newgraph.addVertex("B")
newgraph.addVertex("C");
newgraph.addEdge("A", "B")
newgraph.addEdge("A", "C");
newgraph.BFS('A')