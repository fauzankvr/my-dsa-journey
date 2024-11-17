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
  bfs(root = this.root) {
    let queue = [root];
    while (queue.length > 0) {
      let node = queue.shift();
      console.log(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  inorder(root = this.root) {
    if (root) {
      this.inorder(root.left);
      console.log(root.value);
      this.inorder(root.right);
    }
  }
  remove(value) {
    this.removeNode(this.root, value);
  }
  removeNode(curr, value) {
    if (value < curr.value) {
      curr.left = this.removeNode(curr.left, value);
    } else if (value > curr.value) {
      curr.right = this.removeNode(curr.right, value);
    } else {
      if (!curr.right && !curr.left) {
        return null;
      }
      if (!curr.right) {
        return curr.left;
      }
      if (!curr.left) {
        return curr.right;
      }
      curr.value = this.min(curr.right);
      curr.right = this.removeNode(curr.right, curr.value);
    }
    return curr;
  }
  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }
  secondLargest(root = this.root, result = []) {
    if (root) {
      this.secondLargest(root.left, result);
      result.push(root.value);
      this.secondLargest(root.right, result);
    }
    return result[0];
  }
  isbst(node, min = -Infinity, max = Infinity) {
    if (!node) return true;
    if (node.value <= min || node.value >= max) return false;
    return (
      this.isbst(node.left, min, node.value) &&
      this.isbst(node.right, node.value, max)
    );
  }
}

let newbst = new bst();
newbst.insert(20);
newbst.insert(10);
newbst.insert(30);
newbst.insert(5);

newbst.inorder();
newbst.remove(10);
console.log("");
newbst.inorder();
console.log("second", newbst.secondLargest());
console.log(newbst.isbst(newbst.root));
