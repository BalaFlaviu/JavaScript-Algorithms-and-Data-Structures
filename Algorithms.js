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
    return 
    if(index === 0) return this.shift(
      if(index);
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

// Example - Pivot Helper Implementation
function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  var pivot = [arr[start]];
  var swapIdx = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}
console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));

// Example - Quick Sort Implementation

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));

// Time complexity 0(n*log n)
// Space complexity 0(n)

/////////////////////////////////
// Radix Sort - Special sorting algorithm that works on lists of numbers, never makes comparisons between elements, exploits the fact that information about the size of a number is encoded in the number of digits.

// Example: Helper Methods

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
// console.log(getDigit(7323, 2));

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// console.log(digitCount(7323354));

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
console.log(mostDigits([1, 2, 333, 555432, 654]));
// Example: Radix Sort

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}
console.log(radixSort([23, 345, 45656, 35445, 324]));

// Time complexity 0(nk)
// Space complexity 0(n+k)
*/

//////////////////////////////////////////////////////////////////
// Data Structures - collections of values, the relationships among them, and the functions or operations that can be applied to the data

// Example

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return "You are expelled!";
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies}`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce(function (a, b) {
      return a + b;
    });
    return sum / this.scores.length;
  }
  static enrollStudents() {
    return "ENROLLING STUDENTS";
  }
}

let firstStudent = new Student("Colt", "Steele", "2");
let SecondStudent = new Student("Jack", "Steele", 2);

/////////////////////////////////
// Singly Linked Lists - Bunch of nodes that are pointing to other nodes
// piece of data - val
// reference to next node - next
/*
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(val);
    if (index === 0) this.unshift(val);
    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    var previousNode = this.get(index - 1);
    var removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}
var list = new SinglyLinkedList();
list.push("Hello");
list.push("Goodbye");
list.push("!");
list.push("<3");
list.push(";)");

// var first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");
*/
/////////////////////////////////
// Doubly Linked Lists - Almost identical to Singly Linked Lists, except every node has another pointer, to the previous node!
// Node: val, next, prev
// DoublyLinkedList : head,tail,length
/*
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    var poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (this.length === 0) return undefined;
    var oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index <= this.length / 2) {
      var count = 0;
      var current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      var count = this.length - 1;
      var current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.unshift();
    if (index === this.length) return !!this.push();

    var newNode = new Node(val);
    var beforeNode = this.get(index - 1);
    var afterNode = beforeNode.next;

    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    (newNode.next = afterNode), (afterNode.prev = newNode);
    this.length--;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) this.shift();
    if (index === this.length - 1) this.pop();
    var removedNode = this.get(index);
    var beforeNode = removedNode.prev;
    var afterNode = removedNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}
*/
/////////////////////////////////
// Stacks and Queues
// Stacks - The last element added to the stack will be the first element removed from the stack
/*
var stack = [];
stack.push("google");

stack.push("instagram");

stack.push("youtube");

stack.pop();

console.log(stack);
*/
// LIFO - Last in, First out
/*
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;

    return temp.value;
  }
}
*/
// Queues - The first element added to the stack will be the first element removed from the stack
/*
var q = [];
q.push("First");
q.push("Second");
q.push("Third");

q.shift();

console.log(q);
*/
/*
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
}
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
*/
/////////////////////////////////
// Trees - A data structure that consists of nodes in a parent/child relationship

// Root - Top node in a tree
// Child - A node directly connected to another node when moving away from the Root
// Parent - The converse notion of a child.
// Siblings - A group of nodes with the same parent
// Leaf - A node with no children
// Edge - The connection between nodes

// Use cases: HTML DOM, Network Routing, Artificial Intelligence, Folders in Operating Systems

// Binary Search Trees - Maximum of 2 children per node. To the left,less than the parent.To the right, more than the parent.
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  // Tree Traversal
  // Breadth-first Search
  BFS() {
    var data = [],
      queue = [],
      node = this.root;

    queue.push(this.root);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  // Depth-first Search
  DFSPreorder() {
    var data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  DFSPostorder() {
    var data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
  DFSInorder() {
    var data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

/////////////////////////////////
// Heaps - A very similar to a binary search tree, but with some different rules
// MaxBinaryHeap, parent nodes are always larger than child nodes
// MinBinaryHeapm parent nodes are alwasys smaller than child nodes

class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }
  // Insert
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor(idx - 1 / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  // Extract
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;
    this.sinkDown();
    return max;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let leftRightIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (swap === null) break;
    }
  }
}
let heap = new MaxBinaryHeap();
heap.insert(55);
