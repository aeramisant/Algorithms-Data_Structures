import { quickSort } from './Sort Algorithms/quickSort.js';
import { randomizer } from './Sort Algorithms/helpers.js';
//Linear Search & Binary Search

const linearSearch = (arr, val) => {
  if (arr.length === 0) {
    console.log('Array is empty');
    return -1;
  }
  if (arr.length === 1 || arr[0] === val) {
    console.log('Value Found! - ', arr[0]);
    return arr[0];
  }
  if (arr[arr.length - 1] === val) {
    console.log('Value Found! - ', arr[arr.length - 1]);
    return arr[arr.length - 1];
  }
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] === val) {
      console.log('Value Found! - ', arr[i]);
      return arr[i];
    }
  }
  console.log('Value not found!');
  return null;
};

// linearSearch(quickSort(randomizer(100)), 50);

const binarySearch = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === val) {
      console.log('Value Found! - ', arr[middle]);
      return middle;
    } else if (arr[middle] < val) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  console.log('Value not found!');
  return -1;
};
//
// binarySearch(quickSort(randomizer(100)), 100);
