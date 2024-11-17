class Stack {
  constructor() {
    this.queue = [];
  }
  push(value) {
    this.queue.push(value);
    for (let i = 0; i < this.queue.length - 1; i++) {
      this.queue.push(this.queue.shift());
    }
  }
  pop() {
    if (this.queue.length == 0) {
      return;
    }
    this.queue.shift();
  }
}

let newstack = new Stack();
newstack.push(10);
newstack.push(20);
newstack.push(30);
newstack.push(40);

newstack.pop();
console.log(newstack);
