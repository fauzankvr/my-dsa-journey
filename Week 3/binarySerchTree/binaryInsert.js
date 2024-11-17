class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
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
}
const newBst = new BST();
newBst.insert(50);
newBst.insert(35);
newBst.insert(60);
newBst.insert(25);
newBst.insert(40);
newBst.insert(5);
newBst.insert(15);
newBst.insert(40);
newBst.insert(37);
newBst.insert(45);
newBst.insert(55);
newBst.insert(70);


