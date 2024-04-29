function binarySearch(sortedArr, value) {
  let left = 0;
  let right = sortedArr.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    if (value === sortedArr[mid]) {
      return mid;
    } else if (value < sortedArr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }

    mid = Math.floor((left + right) / 2);
  }
  return -1;
}

const arr = [2, 3, 5, 6, 8, 9, 13, 16, 18];

// console.log(binarySearch(arr, 2));
// console.log(binarySearch(arr, 18));
// console.log(binarySearch(arr, 20));
// console.log(binarySearch(arr, 0));
