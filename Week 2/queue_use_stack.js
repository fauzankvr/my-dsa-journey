class QueueUsingStack {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2.pop();
  }
}

let newqueue = new QueueUsingStack();
newqueue.enqueue(10);
newqueue.enqueue(20);
newqueue.enqueue(30);

console.log(newqueue.dequeue()); 
console.log(newqueue.dequeue()); 
console.log(newqueue.dequeue()); 
