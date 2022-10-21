/////////////////////////////////
/// Frequency Counters

// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared in the second array.The frequency of values must be the same.
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
/// Multiple Pointers
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
/// Sliding Window
// Write a function called maxSubarraySum which accepts an array of integers and a number called n.The function should calculate the maximum sum of n consecutive elements in the array
