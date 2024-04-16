// Child index based on parent index => LC: 2n+1, RL: 2n+2
// Parent index based on child index => Math.floor((childIndx -1)/2)

class BinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp(value);
  }

  bubbleUp(el) {
    let childIndex = this.values.length - 1;

    while (childIndex > 0) {
      let parentIndx = Math.floor((childIndex - 1) / 2);
      const parentValue = this.values[parentIndx];
      if (el <= parentIndx) break;
      this.values[parentIndx] = el;
      this.values[childIndex] = parentValue;
      childIndex = parentIndx;
    }
  }
  extractMax() {
    const max = this.values[0];
    const fillerValue = this.values.pop();
    this.values[0] = fillerValue;

    let index = 0;
    let leftChildIndex = 2 * index + 1; // 2n + 1
    let rightChildIndex = 2 * index + 2; // 2n + 2

    while (rightChildIndex < this.values.length) {
      let swappedToIndex;
      if (this.values[leftChildIndex] > this.values[rightChildIndex]) {
        swappedToIndex = leftChildIndex;
      } else {
        swappedToIndex = rightChildIndex;
      }

      const largerChild = this.values[swappedToIndex];

      if (largerChild <= fillerValue) break;

      if (largerChild > fillerValue) {
        // swap and update index, and children
        index = swappedToIndex;
        leftChildIndex = 2 * index + 1;
        rightChildIndex = 2 * index + 2;
      }
    }

    return max;
  }
}

const newBinaryHeap = new BinaryHeap();
// console.log(newBinaryHeap.values);
newBinaryHeap.insert(55);
console.log(newBinaryHeap.values);
console.log(newBinaryHeap.extractMax());
console.log(newBinaryHeap.values);
