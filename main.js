// arr2 should be values of arr1 squared, same frequency
function compareArr(arr1, arr2) {
  if (arr1.length !== arr2.length || arr1.length == 0) return false;
  const numsObj1 = {};
  const numsObj2 = {};

  for (const val of arr1) {
    const valSqr = val * val;
    numsObj1[valSqr] ? (numsObj1[valSqr] += 1) : (numsObj1[valSqr] = 1);
  }

  for (const val of arr2) {
    numsObj2[val] ? (numsObj2[val] += 1) : (numsObj2[val] = 1);
  }

  for (const key in numsObj1) {
    if (!(numsObj2[key] == numsObj1[key])) return false;
  }

  return true;
}

const arr1 = [2, 4, 3, 3, 4];
const arr2 = [4, 9, 16, 16, 9];
// console.log(compareArr(arr1, arr2));

// PAIR OF NUMBERS THAT RETURN 0 WHEN ADDED
const numsArr = [-3, -2, -1, 0, 1, 2, 3];

function twoNumsSummingToZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const currentSum = arr[left] + arr[right];
    if (currentSum == 0) {
      return [arr[left], arr[right]];
    } else if (currentSum < 0) {
      left++;
    } else {
      right--;
    }
  }
  return undefined;
}

// console.log(twoNumsSummingToZero(numsArr));

const arrWithDuplicates = [1, 1, 1, 2, 3, 3, 3, 3, 3, 5, 7, 7, 7, 7, 7, 7, 7];

function countUnique(arr) {
  if (arr.length == 0) return 0;
  if (arr.length == 1) return 1;

  let count = 1;
  let left = 0;
  let right = 1;

  while (right < arr.length) {
    if (arr[left] == arr[right]) {
      right++;
    } else {
      count++;
      left = right;
      right++;
    }
  }

  return count;
}

// console.log("UNIQUE VALUES COUNT->>", countUnique(arrWithDuplicates));

function areThereDuplicates(...items) {
  // good luck. (supply any arguments you deem necessary.)

  const itemsObj = {};

  for (let i = 0; i < items.length; i++) {
    if (itemsObj[items[i]]) return true;
    else itemsObj[items[i]] = items[i];
  }

  return false;
}

function averagePair(arr, targetAvg) {
  let left = 0;
  let right = arr.length - 1;
  let avg;
  while (left < right) {
    avg = (arr[left] + arr[right]) / 2;
    if (avg === targetAvg) {
      return true;
    } else if (avg < targetAvg) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

// console.log("----AVG PAIRS-----");

// console.log(averagePair([1, 2, 3], 2.5)); // true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
// console.log(averagePair([], 4)); // false

// function isSubsequence(str1, str2) {
//   if (str1.length === 0 || str2.length === 0) return false;
//   const strArr = str1.split("");
//   for (let i = 0; i <= str2.length; i++) {
//     if (strArr.length === 0) return true;

//     if (strArr[0] === str2[i]) strArr.shift();
//   }
//   return false;
// }
function isSubsequence(str1, str2) {
  if (str1.length === 0 || str2.length === 0) return false;
  let newStringOne = str1;
  for (let i = 0; i <= str2.length; i++) {
    if (newStringOne.length === 0) return true;
    if (newStringOne[0] === str2[i]) newStringOne = newStringOne.slice(1);
  }
  return false;
}

// console.log("---IS SUBSEQUENCE---");
// console.log(isSubsequence("hello", "hello world")); // true
// console.log(isSubsequence("sing", "sting")); // true
// console.log(isSubsequence("abc", "abracadabra")); // true
// console.log(isSubsequence("abc", "acb")); //false

function maxSubarraySum(arr, num) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length < num) return null;
  let largestSum = 0;
  for (let i = 0; i < num; i++) largestSum += arr[i];

  let currentSum = largestSum;

  for (let i = num; i < arr.length; i++) {
    currentSum = currentSum + arr[i] - arr[i - num];
    largestSum = Math.max(currentSum, largestSum);
  }
  return largestSum;
}

console.log("---SLIDING WINDOW---");
console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
