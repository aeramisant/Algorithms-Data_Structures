import randomizer from './randomizer.js';
//Merge Sort
//Merge Sort is a divide and conquer algorithm that divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.
//The merge() function is used for merging two halves.
//Time Complexity: O(n log n)
//Space Complexity: O(n)
//Stable: Yes
//In-Place: No
//Usage: Merge Sort is a stable sorting algorithm.
//It is used for external sorting.

const merge = (left, right) => {
  let result = [],
    leftIndex = 0,
    rightIndex = 0;

  // Compare elements from the start of each array, adding the smallest one to the result
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++; // move to the next element in the left array
    } else {
      result.push(right[rightIndex]);
      rightIndex++; // move to the next element in the right array
    }
  }

  // Concatenate any remaining elements from the left and right arrays
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  // Divide the array in half
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Recursively sort the halves
  return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort(randomizer(100)));
