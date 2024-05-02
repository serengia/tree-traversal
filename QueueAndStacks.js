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
      return this;
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

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  peek() {
    return this.front?.value;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.front) {
      this.front = newNode;
      this.back = newNode;
      return this;
    }

    this.back.next = newNode;
    return this;
  }

  dequeue() {
    if (!this.front) return undefined;
    const frontNode = this.front;
    this.front = frontNode.next;
    return frontNode.value;
  }
}

const myStack = new Stack();
myStack.push(10);
myStack.push(7);
myStack.push(5);
console.log(myStack.peek());

const myQueue = new Queue();
myQueue.enqueue(80);
myQueue.enqueue(10);
myQueue.enqueue(7);
myQueue.enqueue(5);
console.log(myQueue.dequeue());
