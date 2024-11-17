class MaxHeap {
  constructor() {
    this.heap = [];
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  leftChild(i) {
    return 2 * i + 1;
  }

  rightChild(i) {
    return 2 * i + 2;
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  heapifyUp(index) {
    let parentIndex = this.parent(index);

    while (parentIndex >= 0 && this.heap[parentIndex] < this.heap[index]) {
      this.swap(parentIndex, index);
      index = parentIndex;
      parentIndex = this.parent(index);
    }
  }

  remove() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const removeNode = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return removeNode;
  }

  heapifyDown(index) {
    let left = this.leftChild(index);
    let right = this.rightChild(index);
    let largest = index;

    if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }
    if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }
    if (largest !== index) {
      this.swap(largest, index);
      this.heapifyDown(largest);
    }
  }

  heapSort() {
    const res = [];
    while (this.heap.length > 0) {
      res.push(this.remove()); 
    }
    console.log(res);
  }
}


let newHeap = new MaxHeap();
newHeap.insert(90);
newHeap.insert(10);
newHeap.insert(50);
newHeap.insert(30);
newHeap.insert(20);
newHeap.insert(60);


newHeap.heapSort(); 

