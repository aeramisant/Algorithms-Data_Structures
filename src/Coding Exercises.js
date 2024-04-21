import { LinkedList } from './Linked List.js';
//sorting an array without using JS native sort method
const myBubbleSort = (array) => {
  //loop the first time through the array
  for (let i = 0; i < array.length; i++) {
    //loop through the same array again but stating from i+1 index
    for (let j = i + 1; j < array.length; j++) {
      //check if current value is greater the the next in line, if true, swap the values
      if (array[j] < array[i]) {
        let temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
};

// console.log(myBubbleSort([3, 5, 1, 8, 6, 9, 10, 7, 4, 2]));

const getSum = (num) => {
  if (num <= 0) {
    console.log('num <= 0', num);
    return num;
  } else {
    console.log('num', num);
    return num + getSum(num - 1);
  }
};

// getSum(10);

//pair sum sequence
const pairSumSequence = (num) => {
  let total = 0;
  for (let i = 0; i <= num; i++) {
    total += pairSum(i, i + 1);
    console.log('total', total);
    // console.log('i', i);
  }
  console.log('total', total);
  return total;
};

const pairSum = (a, b) => a + b;
// pairSumSequence(10);

//find the biggest number in array
const findBiggestNumber = (arr) => {
  let result = arr[0];
  arr.forEach((el) => (el > result ? (result = el) : result));
  console.log('result', result);
  return result;
};
const arrayWithRandomNumbers = (length) => {
  let result = [];
  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * 1000 + 1);
    result[i] = randomNumber;
  }
  //   console.log(result);
  return result;
};

const twoDimensionalRandomNumbersArray = (arrayLength, indexLength) => {
  if (
    typeof arrayLength !== 'number' ||
    arrayLength <= 0 ||
    typeof indexLength !== 'number' ||
    indexLength <= 0
  ) {
    console.error('arrayLength or indexLength is not a number or less than 0');
    return;
  }
  let result = new Array(arrayLength).fill(null);
  result.forEach((el, i) => {
    result[i] = arrayWithRandomNumbers(indexLength);
  });
  //   console.log(result);
  return result;
};

// twoDimensionalRandomNumbersArray(10, 4);
// findBiggestNumber(arrayWithRandomNumbers(100));

//list all the two dimensional array numbers
const traverseTwoDimensionalArray = (array) => {
  const result = [];
  array.forEach((el) => {
    el.forEach((innerEl) => {
      result.push(innerEl);
    });
  });
  console.log(result);
  return result;
};

// traverseTwoDimensionalArray(twoDimensionalRandomNumbersArray(10, 4));

//look for a number in two dimensional array using linear search
const linearSearchTwoDimensionalArray = (array, number) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === number) {
        return 'ELEMENT FOUND --- ' + array[i][j];
      }
    }
  }
  return 'ELEMENT NOT FOUND';
};
const arr = [
  [495, 409, 636, 780],
  [454, 251, 167, 750],
  [366, 752, 351, 247],
  [317, 360, 248, 31],
  [112, 627, 817, 345],
  [509, 541, 390, 886],
  [750, 612, 454, 35],
  [489, 81, 874, 488],
  [397, 838, 646, 725],
  [813, 106, 913, 822],
];
// console.log(linearSearchTwoDimensionalArray(arr, 488));
// temperature();

//Missing number
//Write a function to find the missing number in a given integer array of 1 to 100.
// The function takes to parameter the array and the number of elements that needs to be in array.
// For example if we want to find missing number from 1 to 6 the second parameter will be 6.
// const missingNUmber = (array) => {
//   //loop through the array and check if the next number is current number +1, if not , you have found the missing number
//   for (let num = 0; num < array.length; num++) {
//     if (array[num + 1] && array[num + 1] !== array[num] + 1) {
//       console.log('missing number is', array[num] + 1);
//       return;
//     }
//   }
//   console.log('no missing number');
//   return;
// };
//missingNUmber([1, 2, 3, 4, 5, 7, 8]);
const missingNumber = (array, arrayLength) => {
  //find the sum of the array
  const sum = (arrayLength * (arrayLength + 1)) / 2;
  const sumOfArray = array.reduce((prev, curr) => prev + curr);
  const result = {
    sum,
    sumOfArray,
    rmissingNumber: sum - sumOfArray,
  };
  return result;
};

// const missNum = missingNumber([1, 2, 3, 4, 5, 7, 8], 8);

// console.log('The missing number is', missNum);

//Two Sum Given an array on integers and an integer, return indices of the two numbers such they add up to target.
// each input would have exactly one solution and you may not use the same element twice.
// You can return the answer in any order.

const twoSum = (array, target) => {
  const result = [];
  //loop through the array
  for (let i = 0; i <= array.length; i++) {
    //loop through the array again starting from the next index
    console.log('array[i]', array[i]);
    for (let j = i + 1; j <= array.length; j++) {
      //check if array[i] + array[j] === target;
      console.log('array[j]', array[j]);
      if (array[i] + array[j] === target) {
        result.push(i, j);
      }
    }
  }
  return result.length === 2 ? result : 'not found!';
};

// const twoSumSolution = twoSum([2, 7, 11, 15], 9); //[0, 1]
// const twoSumSolution = twoSum([3, 2, 4], 6); //[1, 2]

// console.log('two sum solution: ', twoSumSolution);

//find product of two maximum numbers in an array of integers
const findProduct = (array) => {
  //find the two maximum numbers in the array
  const sorted_Array = [];
  // sort the array in ascending order
  //loop through the array and find the new minimum number
  for (let i = 0; i <= array.length; i++) {
    let min = array[i];
    for (let j = i + 1; j <= array.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        sorted_Array.push(min);
      }
      console.log(min, arr[j]);
    }
  }
  return sorted_Array;
};
// const findProductOfTwoMaxNums = findProduct([3, 5, 1, 8, 6, 9, 10, 7, 4, 2]);
// console.log('findProductOfTwoMaxNums', findProductOfTwoMaxNums);

//Middle Function
// Write a function called middle that takes a list and returns a new list that contains all but the first and last elements.

const findMiddle = (array) => array.slice(1, array.length - 1);

// const middle = findMiddle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// console.log('middle', middle);

//Given 2D list calculate the sum of diagonal elements.

const sumOfDiagonal = (array) => {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i][1];
  }
  return result;
};
const arr2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// const sumOfDiagonalElements = sumOfDiagonal(arr2D);
// console.log('sumOfDiagonalElements', sumOfDiagonalElements);

// Given a list, write a function to get first, second best scores from the list.
// List may contain duplicates.

const findFirstAndSecondBestScores = (array, sortFn) => {
  const result = sortFn(array);
  return result.slice(result.length - 2, result.length);
};

// console.log(
//   findFirstAndSecondBestScores(
//     [3, 5, 1, 8, 6, 9, 10, 10, 7, 4, 2],
//     myBubbleSort
//   )
// );
//Duplicate Number
// Write a function to remove the duplicate numbers on given integer array/list.
const removeDuplicates = (array, bubbleSort) => {
  const result = bubbleSort(array);
  //loop through the array and check if the next number is the same as the current number, if true, remove the number
  for (let i = 0; i < result.length; i++) {
    if (result[i + 1] && result[i + 1] === result[i]) {
      result.splice(i, 1);
    }
  }
  return result;
};

// console.log(
//   removeDuplicates([1, 3, 5, 1, 8, 6, 5, 9, 10, 10, 7, 4, 2], myBubbleSort)
// );

// Pairs
// Write a function to find all pairs of an integer array whose sum is equal to a given number.
// Do not consider commutative pairs.
// Example
// pair_sum([2, 4, 3, 5, 6, -2, 4, 7, 8, 9],7)
// Output : ['2+5', '4+3', '3+4', '-2+9']
// Note:
// 4+3 comes from second and third elements from the main list.
// 3+4 comes from third and seventh elements from the main list.
const sumPairs = (array, target) => {
  const result = [];
  //loop through the array
  for (let i = 0; i < array.length; i++) {
    const secondNum = target - array[i];
    //check if the second number is in the array
    if (secondNum > 0 && array.includes(secondNum)) {
      result.push(`${array[i]} + ${secondNum}`);
    }
  }
  return result;
};

// console.log(sumPairs([2, 4, 3, 5, 6, -2, 4, 7, 8, 9], 7)); //['2+5', '4+3', '3+4', '-2+9']

/*
Contains Duplicate
Given an integer array nums, return true if any value appears at least twice in the array,
and return false if every element is distinct.
Example :
Input: nums = [1,2,3,1]
Output: true
Hint: Use sets
*/
const containsDuplicate = (array) => {
  const result = new Set(array);
  return result.size !== array.length;
};

// console.log(containsDuplicate([1, 2, 3, 4, 5]));
// class myLinkedList extends LinkedList {
//   constructor() {
//     super();
//   }
//   //method to partition a linked list around a value x,
//   //such that all nodes less than x come before all nodes greater than or equal to x.
//   partitionList(value) {
//     //check if the list is empty
//     if (this.length < 1) {
//       console.log('List is empty!');
//       return;
//     }
//     const newNode = this.createNode(value);
//     let currentNode = this.head;
//   }
// }
// const myList = new LinkedList();
// myList
//   .appendNode(1)
//   .appendNode(200)
//   .appendNode(3)
//   .appendNode(60)
//   .appendNode(57)
//   .prependNode(0)
//   .prependNode(-1)
//   .appendNode(6);
// const partitionList = (list, value) => {
//   let current = list.head;
//   const newList = new LinkedList();
//   newList.appendNode(value);
//   while (current) {
//     if (current.value >= value) {
//       newList.appendNode(current.value);
//     } else {
//       newList.prependNode(current.value);
//     }
//     current = current.next;
//   }
//   console.log('newList', newList);
//   return newList;
// };
// const partitionedList = partitionList(myList, 40);
// partitionedList.printList();
