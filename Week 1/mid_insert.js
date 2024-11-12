class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class linkedList {
  constructor() {
    this.head = null;
  }

  push(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
  }
  midInsert(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let curr = this.head;
      let length = 0;
      while (curr) {
        length++;
        curr = curr.next;
      }
      let mid = Math.floor(length / 2);
      let curr1 = this.head;
      let prev = null;
      for (let i = 0; i < mid; i++) {
        prev = curr1;
        curr1 = curr1.next;
      }

      node.next = curr1;
      prev.next = node;
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

let newlinkedList = new linkedList();
newlinkedList.push(10);
newlinkedList.push(20);
newlinkedList.push(50);
newlinkedList.push(60);
newlinkedList.midInsert(33);
newlinkedList.print();
