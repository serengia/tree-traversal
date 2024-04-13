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
      return this;
    }

    let currentNode = this.root;

    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        } else {
          currentNode = currentNode.left;
        }
      } else if (value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        } else {
          currentNode = currentNode.right;
        }
      }

      if (currentNode.value === value) {
        console.log("Value already exist");
        return undefined;
      }
    }
  }

  find(value) {
    if (!this.root) return false;

    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) return true;
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  BFS() {
    if (!this.root) return undefined;
    const queue = [];
    const data = [];
    queue.push(this.root);

    while (queue.length !== 0) {
      const node = queue.pop();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  DFSPreOrder() {
    if (!this.root) return undefined;
    const data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return data;
  }

  DFSPostOrder() {
    if (!this.root) return undefined;
    const data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }

    traverse(this.root);

    return data;
  }

  DFSInOrder() {
    if (!this.root) return undefined;
    const data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return data;
  }
}

//        10
//    7        17
//  3   8    12  22

const myTree = new BST();
myTree.insert(10);
myTree.insert(7);
myTree.insert(17);
myTree.insert(3);
myTree.insert(8);
myTree.insert(12);
myTree.insert(22);
// console.log(myTree.insert(22));
console.log(myTree.find(10));
console.log(myTree.find(7));
console.log(myTree.find(4));

console.log(myTree.find(5));
console.log(myTree.find(12));

console.log(myTree.BFS());
console.log(myTree.DFSPreOrder());
console.log(myTree.DFSPostOrder());
console.log(myTree.DFSInOrder());
