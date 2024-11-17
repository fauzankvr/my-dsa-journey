class heap{
    constructor() {
       this.heap = [] 
    }
    insert(value) {
        this.heap.push(value)
        let curr = this.heap.length-1
        let parent = Math.max((curr - 1)/2)
        while (curr > 0 && this.heap[parent] < this.heap[curr]) {
            [this.heap[curr], this.heap[parent]] = [this.heap[parent], this.heap[curr]]
            curr = parent
            parent = Math.max((curr-1)/2)
        }
    }
    findRightChild(value) {
        let index = this.heap.indexOf(value)
        let right = 2 * index + 2
        return this.heap[right]
    }
    print() {
        console.log(this.heap)
    }

}
let newheap = new heap()
newheap.insert(10)
newheap.insert(70)
newheap.insert(40)
newheap.print()
console.log(newheap.findRightChild(70))