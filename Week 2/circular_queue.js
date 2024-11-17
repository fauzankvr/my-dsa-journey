class circularQueue {
  constructor(capacity) {
    this.item = new Array(capacity);
    this.capacity = capacity;
    this.length = 0;
    this.rare = -1;
    this.front = -1;
  }
  isFull() {
    return this.capacity == this.length;
  }
  isEmpty() {
    return this.length == 0;
  }
  enqueue(element) {
    if (this.isFull()) {
      console.log("queue full");
      return;
    }
    this.rare = (this.rare + 1) % this.capacity;
    this.item[this.rare] = element;
    this.length++;
    if (this.front == -1) {
      this.front = this.rare;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    let item = this.item[this.front];
    this.item[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.length--;
    if (this.isEmpty()) {
      this.front = -1;
      this.rare = -1;
    }
    return item;
  }
}

let newcercular = new circularQueue(5);
newcercular.enqueue(10);
newcercular.enqueue(20);
newcercular.enqueue(50);
newcercular.enqueue(70);
newcercular.enqueue(90);
newcercular.dequeue();
newcercular.dequeue();
newcercular.enqueue(110);
newcercular.enqueue(110);
newcercular.enqueue(130);
console.log(newcercular);
