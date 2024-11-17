function minHeapify(arr, n, i) {
    let smallest = i
    let left = 2 * i + 1
    let right = 2 * i + 2
    if (left < n && arr[left] < arr[smallest]) {
        smallest = left
    }
    if (right < n && arr[right] < arr[smallest]) {
        smallest = right
    }
    if (smallest !== i) {
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]]
        minHeapify(arr,n,smallest)
    }
}

function heapSort(arr, n) {
    
}