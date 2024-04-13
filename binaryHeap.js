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
}

const newBinaryHeap = new BinaryHeap();
console.log(newBinaryHeap.values);
newBinaryHeap.insert(55);
console.log(newBinaryHeap.values);
