class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  insertion(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let curr = this.root;
    while (curr) {
      if (value == curr.value) return undefined;
      if (value < curr.value) {
        if (curr.left == null) {
          curr.left = newNode;
          return this;
        }
        curr = curr.left;
      } else {
        if (curr.right == null) {
          curr.right = newNode;
          return this;
        }
        curr = curr.right;
      }
    }
  }
  find(value) {
    if (!this.root) return undefined;
    let curr = this.root;
    let found = false;
    while (curr && !found) {
      if (value < curr.value) {
        curr = curr.left;
      } else if (value > curr.value) {
        curr = curr.right;
      } else {
        found = curr;
      }
    }
    if (!found) return false;
    return true;
  }
  remove(value) {
    this.root = this.removeNode(this.root, value);
  }
  removeNode(curr, value) {
    if (curr == null) {
      return curr;
    }
    if (value == curr.value) {
      if (curr.left == null && curr.right == null) {
        return null;
      } else if (curr.left == null) {
        return curr.left;
      } else if (curr.right == null) {
        return curr.right;
      } else {
        let tempNode = this.kthSmalletsNode(curr.right);
        curr.value = tempNode.value;
        curr.right = this.removeNode(curr.right, tempNode.value);
        return curr;
      }
    } else if (value < curr.value) {
      curr.left = this.removeNode(curr.left, value);
      return curr;
    } else {
      curr.right = this.removeNode(curr.right, value);
      return curr;
    }
  }
  kthSmalletsNode(node) {
    while (!node.left == null) {
      node = node.left;
    }
    return node;
  }
  preorder(root) {
    let out = [];
    this.helperpreorder(root, out);
    console.log(out);
  }
  helperpreorder(root, out) {
    if (root.value == null) {
      return;
    }
    out.push(root.value);
    root.left && this.helperpreorder(root.left, out);
    root.right && this.helperpreorder(root.right, out);
  }
  inorder(root) {
    let out = [];
    this.inorderHelp(root, out);
    console.log(out);
  }

  inorderHelp(root, out) {
    root.left && this.inorderHelp(root.left, out);
    out.push(root.value);
    root.right && this.inorderHelp(root.right, out);
  }
  postorder(root) {
    root.left && this.postorder(root.left);
    root.right && this.postorder(root.right);
    console.log(root.value);
  }
}

let newBst = new BinaryTree();
newBst.insertion(10);
newBst.insertion(20);
newBst.insertion(5);
newBst.postorder(newBst.root);
newBst.remove(5);
