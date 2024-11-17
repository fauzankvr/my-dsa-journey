class Graph{
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

    dfs(node,visited=new Set()) {
        if (visited.has(node)) return
            console.log(node)
            visited.add(node)
            for (let nigbor of this.list[node]) {
                this.dfs(nigbor,visited)
            }
       
    }

}

let newgraph = new Graph()
newgraph.addEdge('a', 'c')
newgraph.addEdge('a', 'd')
newgraph.addEdge('d', 'c')
newgraph.addEdge('b', 'c')
newgraph.addVertex("y");
newgraph.dfs('a')
console.log(newgraph)
