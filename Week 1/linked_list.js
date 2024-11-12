class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add a node at the beginning of the list 
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  // Add a node at the end of the list 
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // Remove a node from the beginning of the list
  shift() {
    if (!this.head) return null;
    const removedNode = this.head;
    this.head = this.head.next;
    removedNode.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return removedNode.value;
  }

  // Remove a node from the end of the list
  pop() {
    if (!this.head) return null;
    if (this.length === 1) {
      const removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return removedNode.value;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    newTail.next = null;
    this.tail = newTail;
    this.length--;
    return current.value;
  }

  // Get a node by its index
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    let count = 0;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  // Set the value of a node at a specific index
  set(index, value) {
    const node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  // Insert a node at a specific index
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const newNode = new Node(value);
    const prev = this.get(index - 1);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;
    return true;
  }

  // Remove a node at a specific index
  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const prev = this.get(index - 1);
    const removedNode = prev.next;
    prev.next = removedNode.next;
    this.length--;
    return removedNode.value;
  }


  // Print the list values for debugging
  print() {
    let current = this.head;
    const values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }
}

// Example usage:
const newLinkedList = new LinkedList();
newLinkedList.unshift(20); 
newLinkedList.unshift(30);
newLinkedList.push(10); 
newLinkedList.push(5); 
newLinkedList.print(); 

newLinkedList.reverse(); 
newLinkedList.print(); 

