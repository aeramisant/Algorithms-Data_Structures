import { randomizer } from './helpers.js';
//Quick Sort
//Quick Sort is a divide and conquer algorithm that selects a pivot element and partitions the array around the pivot.
//Time Complexity: O(n log n)
//Space Complexity: O(log n)
//Stable: No
//In-Place: Yes
//Usage: Quick Sort is an efficient sorting algorithm.
//It is used for internal sorting.
//It is used for large datasets.

const swap = (arr, leftIndex, rightIndex) => {
  let temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
};

const pivot = (arr, pivotIndex, endIndex) => {
  let pivot = arr[pivotIndex];
  let swapIndex = pivotIndex;
  for (let i = pivotIndex + 1; i <= endIndex; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, pivotIndex, swapIndex);
  return swapIndex;
};

const quickSortHelper = (arr, left, right) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSortHelper(arr, left, pivotIndex - 1);
    quickSortHelper(arr, pivotIndex + 1, right);
  }
  //   console.log(arr);
  return arr;
};

export const quickSort = (arr) => {
  return quickSortHelper(arr, 0, arr.length);
};
// console.log(quickSort(randomizer(100)));
