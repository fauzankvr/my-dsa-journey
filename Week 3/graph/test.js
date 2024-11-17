class graph{
    constructor() {
        this.list ={}
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
        this.list[vertex2].add(vertex1);
    }
    bfs(start) {
        let visitd = new Set()
        let queue = []
        queue.push(start)
        while (queue.length > 0) {
            let node = queue.shift()
            if (!visitd.has(node)) {
                visitd.add(node)
                console.log(node)
                for (let val of this.list[node]) {
                    if (!visitd.has(val)) {
                        queue.push(val)
                    }
                }
            }
        }
    }
}

let newgraph = new graph()
newgraph.addVertex('a')
newgraph.addVertex("b");
newgraph.addEdge("a","b")
newgraph.addEdge("a", "c");
newgraph.addEdge("b", "c");
newgraph.bfs('a')
console.log(newgraph)