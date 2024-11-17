class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class bst {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(curr, newNode) {
    if (newNode.value < curr.value) {
      if (!curr.left) {
        curr.left = newNode;
      } else {
        this.insertNode(curr.left, newNode);
      }
    } else {
      if (!curr.right) {
        curr.right = newNode;
      } else {
        this.insertNode(curr.right, newNode);
      }
    }
  }
  secondLargest(root) {
    let counter = 0;
    let result = null;
    function reverseInorder(node) {
      if (!node || counter >= 2) return null;
      reverseInorder(node.right);
      counter++;
      if (counter == 2) {
        result = node.value;
        return;
      }
    }
    reverseInorder(root);
    return result != null ? result : "stock is less 2";
  }
}

let newbst = new bst();
newbst.insert(10);
newbst.insert(20);
newbst.insert(60);
newbst.insert(5);
newbst.insert(61);
console.log(newbst.secondLargest(newbst.root));
