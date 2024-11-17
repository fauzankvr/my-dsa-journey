class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let curr = this.root;
    while (curr) {
      if (value < curr.value) {
        if (!curr.left) {
          curr.left = newNode;
          return;
        }
        curr = curr.left;
      } else {
        if (!curr.right) {
          curr.right = newNode;
          return;
        }
        curr = curr.right;
      }
    }
  }
  findBredth() {
    if (!this.root) return null;
    const queue = [this.root];
    let maxBreadth = 0;

    while (queue.length > 0) {
      const levelSize = queue.length;
      maxBreadth = Math.max(maxBreadth, levelSize);
      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift();
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
    return maxBreadth;
  }
  inOrder(node) {
    if (node) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }
  maxHight(root) {
    if (!root) return 0;
    const leftHight = this.maxHight(root.left);
    const rightHight = this.maxHight(root.right);
    return 1 + Math.max(leftHight, rightHight);
  }
  countOfleaf(root) {
    if (!root) return 0;
    if (!root.left && !root.right) return 1;
    return this.countOfleaf(root.left) + this.countOfleaf(root.right);
  }
  countOfNodes(root) {
    if (!root) return 0;
    return 1 + this.countOfNodes(root.left) + this.countOfNodes(root.right);
  }
  sumOfNodes(root) {
    if (!root) return 0;
    return (
      root.value + this.sumOfNodes(root.left) + this.sumOfNodes(root.right)
    );
  }
  BFS(root) {
    if (!root) return [];
    const result = [];
    const queue = [root];
    while (queue.length > 0) {
      const node = queue.shift();
      result.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return result;
  }
}

let newTree = new Tree();
newTree.insert(50);
newTree.insert(45);
newTree.insert(60);
newTree.insert(30);
newTree.insert(47);
newTree.insert(55);
newTree.insert(70);

newTree.inOrder(newTree.root);
console.log(newTree.findBredth(), "breadth");
console.log(newTree.maxHight(newTree.root), "max hight");
console.log(newTree.countOfleaf(newTree.root), "count of leaf");
console.log(newTree.sumOfNodes(newTree.root), "sum of nodes");
console.log(newTree.BFS(newTree.root));
