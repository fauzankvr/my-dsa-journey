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
      this.addNewNode(this.root, newNode);
    }
  }
  addNewNode(curr, newNode) {
    if (newNode.value < curr.value) {
      if (!curr.left) {
        curr.left = newNode;
      } else {
        this.addNewNode(curr.left, newNode);
      }
    } else {
      if (!curr.right) {
        curr.right = newNode;
      } else {
        this.addNewNode(curr.right, newNode);
      }
    }
  }
  secondLargest(root, res = []) {
    if (root) {
      this.secondLargest(root.left, res);
      res.push(root.value);
      this.secondLargest(root.right, res);
    }
    return res[res.length - 2];
  }
}

let newbst = new bst();
newbst.insert(10);
newbst.insert(70);
newbst.insert(80);
newbst.insert(20);
console.log(newbst.secondLargest(newbst.root));
