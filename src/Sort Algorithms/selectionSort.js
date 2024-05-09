import { randomizer } from './helpers.js';

//
//Selection Sort
//Selection Sort is a simple sorting algorithm that works by repeatedly finding the minimum element from the unsorted part of the array and putting it at the beginning.
//The algorithm maintains two subarrays in a given array.
//The subarray which is already sorted.
//The subarray which is unsorted.
//In every iteration of selection sort, the minimum element from the unsorted subarray is picked and moved to the sorted subarray.
//Time Complexity: O(n^2)
//Space Complexity: O(1)
//Stable: No
//In-Place: Yes
//Usage: Selection Sort is not a practical sorting algorithm when n is large.
//It will not be efficient in the worst and average cases.
//It is mainly used for educational purposes.
//The main advantage of Selection Sort is that it is easy to implement.
//The main disadvantage of Selection Sort is its poor efficiency.
//Selection Sort is not suitable for large datasets.

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  console.log(arr);
  return arr;
};
selectionSort(randomizer(100));
