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
}

const myBinaryHeap = new BinaryHeap();
console.log(myBinaryHeap.values);
myBinaryHeap.insert(47);
console.log(myBinaryHeap.values);
myBinaryHeap.insert(55);
console.log(myBinaryHeap.values);
