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
  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (!root.left) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (!root.right) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
  therdLargest(root) {
    let result = null;
    let count = 0;
    function inorder(node) {
      if (!node || count >= 3) return;
      inorder(node.right);
      count++;
      if (count == 3) {
        result = node.value;
        return;
      }
      inorder(node.left);
    }
    inorder(root);
    return result == null ? "error" : result;
  }
}

let newbst = new bst();
newbst.insert(10);
newbst.insert(90);
newbst.insert(50);
newbst.insert(40);
newbst.insert(45);
console.log(newbst.therdLargest(newbst.root));
