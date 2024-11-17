function pushHeap(heap, newKey) {
    heap.push(newKey)
    let curr = heap.length - 1
    while (curr > 0) {
        let parent = Math.floor((curr - 1) / 2)
        if (heap[curr] < heap[parent]) {
            [heap[curr], heap[parent]] = [heap[parent], heap[curr]]
            curr = parent
        } else {
            break
        }
    }
}

function heapPop(heap) {
    const n = heap.length;
    [heap[0], heap[n - 1]] = [heap[n - 1], heap[0]]
    const removeKey = heap.pop()
    let curr = 0
    while (2 * curr + 1 < heap.length) {
        let leftIndex = 2 * curr + 1;
        let rightIndex = 2 * curr + 2;
        const minChildIndex = (rightIndex < heap.length && heap[rightIndex] < heap[leftIndex] ? rightIndex : leftIndex);
        if (heap[minChildIndex] < heap[curr]) {
                [heap[minChildIndex], heap[curr]] = [
                  heap[curr],
                  heap[minChildIndex],
                ];
                curr = minChildIndex; 
        } else {
            break
        }
   
    }
    
}
function peek(heap) {
    if (!heap) {
        return
    }
    return heap[0]
}

let heap = []
pushHeap(heap, 5)
pushHeap(heap, 40)
pushHeap(heap, 6)
pushHeap(heap,2)
console.log(heap)
heapPop(heap)
heapPop(heap)

console.log(heap);