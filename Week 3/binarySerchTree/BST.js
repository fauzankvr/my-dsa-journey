class Node {
  constructor(value) {
    (this.value = value), (this.left = null), (this.right = null);
  }
}

class binarySerchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left == null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right == null) {
        root.right = newNode;
      } else {
        this.insertNode(this.right, newNode);
      }
    }
  }

  serch(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value == value) {
        return true;
      } else if (value < root.value) {
        return this.serch(root.left, value);
      } else {
        return this.serch(this.right, value);
      }
    }
  }

  preorder(root) {
    if (root) {
      console.log(root.value);
      this.preorder(root.left);
      this.preorder(root.right);
    }
  }

  inorder(root) {
    if (root) {
      this.inorder(root.left);
      console.log(root.value);
      this.inorder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  levelOrder() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value) {
    this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root == null) {
      return null;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
}

const newbinary = new binarySerchTree();

newbinary.insert(10);
newbinary.insert(5);
newbinary.insert(15);
newbinary.insert(3);

// console.log(newbinary.serch(newbinary.root, 5))

// newbinary.levelOrder()
// console.log("minimun",newbinary.min(newbinary.root));
// console.log('maximun ',newbinary.max(newbinary.root));
newbinary.levelOrder();
console.log();
newbinary.delete(10);

newbinary.levelOrder();
