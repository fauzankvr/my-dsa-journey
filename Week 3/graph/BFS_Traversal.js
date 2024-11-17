class Graph {
    constructor() {
        this.list = {}
    }
    addVertex(value) {
        if (!this.list[value]) {
            this.list[value] = new Set()
        }
    }
    addEdge(vetex1, vetex2) {
        if (!this.list[vetex1]) {
            this.addVertex(vetex1)
        }
        if (!this.list[vetex2]) {
            this.addVertex(vetex2)
        }
        this.list[vetex1].add(vetex2)
        this.list[vetex2].add(vetex1)
    }
    
    bfs(start){
        let visited = new Set()
        let queue = [start]
        visited.add(start)

        while (queue.length > 0) {
            let node = queue.shift()
            console.log(node)
            for (let nigbor of this.list[node]) {
                if (!visited.has(nigbor)) {
                    visited.add(nigbor)
                    queue.push(nigbor)
                }
            }
        }
        
    }
}

let newgraph = new Graph()

newgraph.addEdge('a','b')
newgraph.addEdge("a", "c");
newgraph.addEdge("b", "c");

newgraph.bfs("a");
console.log(newgraph)