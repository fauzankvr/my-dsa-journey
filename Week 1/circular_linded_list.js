class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      node.next = this.head; 
    } else {
      this.tail.next = node;
      this.tail = node;
      this.tail.next = this.head; 
    }
    this.length++;
  }

  print() {
    if (!this.head) return; 

    let curr = this.head;
    let count = 0; 
    do {
      console.log(curr.value);
      curr = curr.next;
      count++;
    } while (curr !== this.head && count < this.length); 
  }
}

let newlinkedList = new linkedList();
newlinkedList.push(10);
newlinkedList.push(20);
newlinkedList.push(30);
newlinkedList.print(); 
