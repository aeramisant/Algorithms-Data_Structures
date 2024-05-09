import { randomizer, heapify } from './helpers.js';
//Heap Sort
//Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure.
//Time Complexity: O(n log n)
//Space Complexity: O(1)
//Stable: No
//In-Place: Yes
//Usage: Heap Sort is an efficient sorting algorithm.
//It is used for internal sorting.
//It is used for large datasets.
//Heap Sort is not suitable for small datasets.
//Heap Sort is not suitable for nearly sorted datasets.
//Heap Sort is not suitable for stable sorting.
//Heap Sort is not suitable for external sorting.
//Heap Sort is not suitable for online sorting.

//Heapify is a process where a binary tree is converted into a heap.
//A heap is a complete binary tree that satisfies the heap property.
//The heap property states that the parent node must be greater than or equal to its child nodes.
//arr[] is an array of integers
//n is the size of the heap
//i is the index of the root node

const heapSort = (arr) => {
  let n = arr.length;
  //Build a max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
  //One by one extract elements from heap
  for (let i = n - 1; i > 0; i--) {
    //Move the root node to the end of the array
    [arr[0], arr[i]] = [arr[i], arr[0]];
    //Call heapify on the reduced heap
    heapify(arr, i, 0);
  }
  console.log(arr);
  return arr;
};

heapSort(randomizer(100));
