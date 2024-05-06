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

// console.log(selectionSort(testArr));

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];

    let j = i - 1;

    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentVal;
  }

  return arr;
}

console.log(insertionSort(testArr));

function merge(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr1[i]);
      i++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

console.log(mergeSort(testArr));
