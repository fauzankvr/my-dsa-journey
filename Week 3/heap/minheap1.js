class Heap {
    constructor() {
        this.heap = []
    }
    getParent(i) {
        return Math.floor((i-1)/2)
    }
    getLeftIndex(i) {
        return 2*i+1
    }
    getRightIndex(i) {
        return 2*i+2
    }
    swap(index1, index2) {
        return [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
    }
    insert(value) {
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1)
    }
    heapifyUp(index) {
        let parantIndex = this.getParent(index);
        while (index > 0 && this.heap[index] > this.heap[parantIndex]) {
            this.swap(index, parantIndex)
            index = parantIndex
            parantIndex = this.getParent(index);
        }
    }
    remove() {
        if (this.heap.length == 0) return null;
        if (this.heap.length === 1) return this.heap.pop()
        
        let min = this.heap[0]
        this.heap[0]=this.heap.pop()
        this.heapifyDown(0)
        return min
    }
    heapifyDown(index) {
        let smallest = index
        let rightIndex = this.getRightIndex(index);
        let leftIndex = this.getLeftIndex(index);
        if (smallest < this.heap.length && this.heap[leftIndex] > this.heap[smallest]) {
            smallest = leftIndex
        }
        if (smallest < this.heap.length && this.heap[rightIndex] > this.heap[smallest]) {
            smallest = rightIndex
        }
        if (smallest !== index) {
            this.swap(smallest, index)
            this.heapifyDown(smallest)
        }
    }
    print() {
        console.log(this.heap)
    }
    heapSort() {
        let result = []
        
        for (let i = 0; i < this.heap.length; i++){
            let removeNode = this.remove()
            i--
            result.push(removeNode)

        }
        return result
    }
}

let newHeap = new Heap()
newHeap.insert(90)
newHeap.insert(60)
newHeap.insert(30)
newHeap.insert(10)
newHeap.insert(20);
newHeap.insert(5);
newHeap.insert(1);
newHeap.insert(9);
newHeap.remove()
newHeap.print()
