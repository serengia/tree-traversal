function bubbleSort(arr) {
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (arr[i] > arr[j]) {
        // Swap
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

const testArr = [16, 2, 67, 34, 5, 1, 0, 22];
console.log(bubbleSort(testArr));
