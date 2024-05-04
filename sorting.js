function bubbleSort(arr) {
  const length = arr.length;

  for (let i = length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const testArr = [16, 2, 67, 34, 5, 1, 0, 22];
// console.log(bubbleSort(testArr));

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = arr[i];
    let smallestIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < smallest) {
        smallest = arr[j];
        smallestIndex = j;
      }
    }

    if (arr[i] > smallest) {
      // swap
      const temp = arr[i];
      arr[i] = smallest;
      arr[smallestIndex] = temp;
    }
  }
  return arr;
}

console.log(selectionSort(testArr));
