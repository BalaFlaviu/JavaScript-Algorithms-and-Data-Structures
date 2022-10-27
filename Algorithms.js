/*
/////////////////////////////////
/// Frequency Counters - This pattern uses objects or sets to collect values/frequences of values

// Write a function called same, which accepts two arrays.The function should return true if every value in the array has it's corresponding value squared in the second array.The frequency of values must be the same.
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}
// console.log(same([1, 2, 3, 2], [9, 1, 4, 4])); // Example O(n**2)

// Refactored for O(n)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
  }
  return true;
}

// Anagrams

// Given two strings,write a function to determine if the second string is an anagram of the first.An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}
// console.log(validAnagram("anagram", "nagaram"));

/////////////////////////////////
/// Multiple Pointers - Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition

// Write a function called SumZero which accepts a sorted array of integers.The function should find the first pair where the sum is 0.Return an array that includes both values that sum to zero or undefined if a pair does not exist.
// First Solution (Time complexity = O(n**2)/Space complexity = O(1) )
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++)
    for (let j = i + 1; j < arr.length; j++)
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
}
// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
// Second Solution (Time complexity = O(n)/Space complexity = O(1) )
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
// Implement a function called countUniqueValues, which accepts a sorted array and counts the unique values in the array.There can be negative numbers in the array, but it will always be sorted.
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
// console.log(countUniqueValues([1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 6, 6, 6]));

/////////////////////////////////
/// Sliding Window - This patter involves creating a window which can either be an array or number from one position to another

// Write a function called maxSubarraySum which accepts an array of integers and a number called n.The function should calculate the maximum sum of n consecutive elements in the array.
// First Solution
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
// Second Solution O(n)
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum); // if(tempSum > maxSum)
  }
  return maxSum;
}
// console.log(maxSubarraySum([2, 5, 4, 6, 8, 3, 8, 2, 9], 3));

/////////////////////////////////
/// Divide and Conquer - This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data

// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed on the function is located.If the value is not found, return -1.
// First Solution
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
// console.log(search([1, 2, 3, 4, 5, 6], 4));
// Second Solution with Binary search
function search(array, val) {
  let min = 0;
  let max = array.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (array[middle] < val) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

/////////////////////////////////
// Recursion - A process that calls itself

// First example
function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}
console.log(countDown(5));

// function countDown(num) {
//   for (var i = num; i > 0; i--) {
//     console.log(i);
//   }
//   console.log("All done!");
// }
// console.log(countDown(5));

// Second example
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
console.log(sumRange(4));
// Third example - Writing Factorial Iteratively
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}
// console.log(factorial(4));
// Fourth example - Writing Factorial Recursively
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
// console.log(factorial(4));
*/

/////////////////////////////////
// Searching Algorithm

// Linear Search Exercise
// Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.

// Don't use indexOf to implement this function!

function linearSearch(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}
// console.log(linearSearch([24, 56, 1, 2], 1));
// Binary Search Exercise
// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  console.log(start, middle, end);
  while (arr[middle] !== elem) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  console.log(start, middle, end);
  if (arr[middle] == elem) {
    return middle;
  }
  return -1;
}
// console.log(binarySearch([2, 5, 6, 9, 13, 15, 15, 28], 15));

// Naive String Search
function naiveSearch(long, short) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        break;
      }
      if (j === short.length - 1) {
        count++;
      }
    }
  }
  return count;
}
// console.log(naiveSearch("loire loled", "lol"));

/////////////////////////////////
// Introduction to Sorting Algorithms

// Telling JavaScript how to sort

function numberCompare(num1, num2) {
  return num1 - num2;
}
console.log([6, 4, 15, 10].sort(numberCompare));

function compareByLen(str1, str2) {
  return str1.length - str2.length;
}
console.log(
  ["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen)
);

/////////////////////////////////
// Bubble sort - A sorting algorithm where the largest values bubbles up to the top
// Example
function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
// First example
function bubbleSort(arr) {
  var noSwaps;
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
// console.log(bubbleSort([37, 45, 29, 8]));
// Time complexity 0(n**2)
// Space complexity 0(1)

/////////////////////////////////
// Selection Sort - Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position
// Example

function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var min = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    var temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}
// console.log(selectionSort([24, 22, 10, 19, 17]));
// Time complexity 0(n**2)
// Space complexity 0(1)

/////////////////////////////////
// Insertion Sort - Builds up the sort by gradually creating a larger left half which is always sorted
// Example

function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}
// console.log(insertionSort([2, 1, 9, 76, 4]));
// Time complexity 0(n**2)
// Space complexity 0(1)

/////////////////////////////////
// Merge Sort
// Example for Merge

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr1.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}
console.log(merge([1, 10, 50], [2, 14, 99, 100]));

// Example for MergeSort

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
console.log(mergeSort([24, 10, 76, 73]));

// Time complexity 0(n*log n)
// Space complexity 0(n)

/////////////////////////////////
// Quick Sort   
