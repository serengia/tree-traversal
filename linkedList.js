class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode) {
      arr.push(currentNode.value);

      currentNode = currentNode.next;
    }
    console.log(arr);
  }

  append(value) {
    const newNode = new Node(value);
    this.length++;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  prepend(value) {
    this.length++;
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    newNode.next = this.head;
    this.head = newNode;
    return this;
  }

  insert(index, value) {
    this.length++;
    const newNode = new Node(value);
    if (index > this.length) {
      return this.append(value);
    }

    let prevNode = this.head;
    let count = 1;
    while (count < index) {
      prevNode = prevNode.next;
      count++;
    }

    let nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = nextNode;
    return this;
  }
}

const list = new LinkedList();
list.append(10);
list.append(7);
list.append(13);
// list.prepend(30);
list.insert(2, 15);
list.insert(10, 41);
list.printList();