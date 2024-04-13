function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    if (value === arr[mid]) {
      return mid;
    } else if (value < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }

    mid = Math.floor((left + right) / 2);
  }

  return -1;
}

const sortedArr = [2, 4, 5, 6, 8, 9, 12, 14, 15];
console.log(binarySearch(sortedArr, 16));
