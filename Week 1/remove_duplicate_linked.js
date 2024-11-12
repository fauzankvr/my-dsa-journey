class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  push(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.length++;
  }

  removedupicate() {
    let set = new Set();
    let curr = this.head;
    let prev = null;
    while (curr) {
      if (set.has(curr.value)) {
        prev.next = curr.next;
        this.length--;
      } else {
        set.add(curr.value);
        prev = curr;
      }
      curr = curr.next;
    }
  }
  print() {
    if (!this.head) {
      return;
    }
    let curr = this.head;
    let res = "";
    while (curr) {
      res += `${curr.value} `;
      curr = curr.next;
    }
    console.log(res);
  }
}

const newlinkedList = new linkedList();
newlinkedList.push(10);
newlinkedList.push(20);
newlinkedList.push(20);
newlinkedList.push(10);
newlinkedList.removedupicate();
newlinkedList.print();
