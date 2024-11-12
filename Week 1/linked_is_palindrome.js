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
      return;
    }
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
      this.length++;
    }
    curr.next = node;
  }
  isPalindrome() {
    let str1 = "";
    let str2 = "";
    let cuu = this.head;
    while (cuu) {
      str1 = `${str1}${cuu.value}`;
      str2 = `${cuu.value}${str2}`;
      cuu = cuu.next;
    }
    console.log(str1);
    console.log(str2);
    return str1 == str2;
  }
}

let newlinkedList = new linkedList();
newlinkedList.push(1);
newlinkedList.push(2);
newlinkedList.push(1);
console.log(newlinkedList.isPalindrome());
