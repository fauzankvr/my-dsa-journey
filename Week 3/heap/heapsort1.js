class maxHeap{
    constructor() {
        this.heap = []
    }
    
    insert(newKey) {
        this.heap.push(newKey)
        let curr = this.heap.length - 1
        let parent = Math.floor((curr - 1) / 2);
        while (curr > 0 && this.heap[parent] < this.heap[curr]) {
            [this.heap[curr], this.heap[parent]] = [this.heap[parent], this.heap[curr]]
            curr = parent
            parent = Math.floor((curr-1)/2)
        }
    }

    delete() {
        if (this.heap.length === 0) return null 
        let n = this.heap.length;
        [this.heap[0], this.heap[n - 1]] = [this.heap[n - 1], this.heap[0]]
        let removeKey = this.heap.pop()
        let curr = 0;
        while (true) {
            let leftIndex = 2 * curr + 1;
            let rightIndex = 2 * curr + 2;
            let largest = curr;
            if (leftIndex < this.heap.length && this.heap[leftIndex] > this.heap[largest]) {
                largest = leftIndex
            }
            if (rightIndex < this.heap.length && this.heap[rightIndex] > this.heap[largest]) {
                largest = rightIndex
            }
            if (largest == curr) break
            [this.heap[curr], this.heap[largest]] = [this.heap[largest], this.heap[curr]]
            curr = largest
        }
        return removeKey
    }
}

function heapSort(arr) {
    const newmaxheap = new maxHeap()
    for (let i = 0; i < arr.length; i++){
        newmaxheap.insert(arr[i])
    }
    for (let i = arr.length - 1; i >= 0; i--){
        arr[i]=newmaxheap.delete()
    }
    return arr
}

let arr = [6, 3, 1, 2, 8]
console.log(heapSort(arr))