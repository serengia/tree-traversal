class BinaryHeap {
  constructor() {
    //             0    1  2   3   4   5   6  7  8
    this.values = [45, 42, 39, 36, 40, 33, 25, 18, 20];
  }

  insert(value) {
    this.values.push(value);
    let index = this.values.length - 1;

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parentEl = this.values[parentIndex];
      if (value === parentEl || value < parentEl) break;

      if (value > parentEl) {
        this.values[parentIndex] = value;
        this.values[index] = parentEl;
        index = parentIndex;
      }
    }
  }

  extractMax() {
    const max = this.values[0];
    let ele = this.values.pop();
    this.values[0] = ele;
    let index = 0;

    while (index < this.values.length) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild = -Infinity;
      let rightChild = -Infinity;
      if (leftChildIndex < this.values.length) {
        leftChild = this.values[leftChildIndex];
      }

      if (rightChildIndex < this.values.length) {
        rightChild = this.values[rightChildIndex];
      }

      // If the biggest child is bigger that then ele, swap
      if (leftChild > rightChild && ele < leftChild) {
        this.values[index] = leftChild;
        this.values[leftChildIndex] = ele;
        index = leftChildIndex;
        // If the biggest child is bigger that then ele, swap
      } else if (rightChild > leftChild && ele < rightChild) {
        this.values[index] = rightChild;
        this.values[rightChildIndex] = ele;
        index = rightChildIndex;
      } else break;
    }

    return max;
  }
}

const myBinaryHeap = new BinaryHeap();
// console.log(myBinaryHeap.values);
// myBinaryHeap.insert(47);
// console.log(myBinaryHeap.values);
myBinaryHeap.insert(55);
console.log(myBinaryHeap.values);
myBinaryHeap.extractMax();
console.log(myBinaryHeap.values);
