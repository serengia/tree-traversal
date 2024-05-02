class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top?.value;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    }

    const temp = this.top;
    this.top = newNode;
    newNode.next = temp;
    return this;
  }

  pop() {
    if (!this.top) return undefined;

    const nodeToRemove = this.head;
    this.head = nodeToRemove.next;
    return nodeToRemove.value;
  }
}

const myStack = new Stack();
myStack.push(10);
myStack.push(7);
myStack.push(5);
console.log(myStack.peek());
