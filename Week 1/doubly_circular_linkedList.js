class Node {
  constructor(value) {
    this.prev = null;
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
      node.next = node;
      node.prev = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      node.next = this.head;
      this.tail.next = node;
      this.head.prev = node;
      this.tail = node;
    }
    this.length++;
  }

  unshift(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      node.next = node;
      node.prev = node;
      this.tail = node;
    } else {
      node.next = this.head;
      node.prev = this.tail;

      this.head.prev = node;
      this.tail.next = node;

      this.head = node;
    }
    this.length++;
  }

  print() {
    let curr = this.head;
    if (!curr) return; 
    do {
      console.log(curr.value);
      curr = curr.next;
    } while (curr !== this.head);
  }
}

let newlinkedList = new linkedList();
newlinkedList.push(10);
newlinkedList.push(20);
newlinkedList.unshift(40); 
newlinkedList.print(); 
