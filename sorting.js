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
console.log(bubbleSort(testArr));
