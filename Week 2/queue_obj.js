class Queue {
  constructor() {
    this.item = {};
    this.rare = 0;
    this.front = 0;
  }
  enqueue(element) {
    this.item[this.rare] = element;
    this.rare++;
  }
  dequeue() {
    let removed = this.item[this.front];
    delete this.item[this.front];
    this.front++;
    return removed;
  }
  isEmpty() {
    return this.rare - this.front == 0;
  }
  peek() {
    return this.item[this.front];
  }
  size() {
    return this.rare - this.front;
  }
  print() {
    if (this.rare == 0) {
      return;
    }
    let res = "";
    for (let key in this.item) {
      res += this.item[key] + " ";
    }
    console.log(res);
  }
  reverse() {
    if (this.isEmpty()) {
      return;
    }
    let data = this.dequeue();
    this.reverse();
    this.enqueue(data);
  }
}

let newqueue = new Queue();
newqueue.enqueue(10);
newqueue.enqueue(20);
newqueue.enqueue(50);
newqueue.dequeue();
newqueue.print();
newqueue.reverse();
// newqueue.print()
