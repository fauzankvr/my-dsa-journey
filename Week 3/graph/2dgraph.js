class graph{

    constructor(vertices) {
        this.vertices = vertices
        this.indexMap = new Map()
        this.metrix = Array.from({ length: vertices.length }, () => Array(vertices.length).fill(0))
        vertices.forEach((vertex, index) => {
            this.indexMap.set(vertex,index)
        })
    }

    addEdge(v1, v2) {
        let in1 = this.indexMap.get(v1)
        let in2 = this.indexMap.get(v2);
        if (in1 == undefined||in2 == undefined) return
        this.metrix[in1][in2]=1
        this.metrix[in2][in1] = 1;
    }
}

let newgraph = new graph(['a','b','c'])
newgraph.addEdge('a','b')
newgraph.addEdge("c", "b");
console.log(newgraph.indexMap)
