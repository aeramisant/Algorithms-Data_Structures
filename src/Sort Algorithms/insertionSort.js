import { randomizer } from './helpers.js';
//Insertion Sort
//Insertion Sort is a simple sorting algorithm that works by building a sorted list one element at a time.
//It takes one element from the list and inserts it into the correct position in the sorted list.
//Time Complexity: O(n^2)
//Space Complexity: O(1)
//Stable: Yes
//In-Place: Yes
//Usage: Insertion Sort is not a practical sorting algorithm when n is large.
//It will not be efficient in the worst and average cases.
//It is mainly used for educational purposes.
//The main advantage of Insertion Sort is that it is easy to implement.
//The main disadvantage of Insertion Sort is its poor efficiency.
//Insertion Sort is not suitable for large datasets.

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  console.log(arr);
  return arr;
};
insertionSort(randomizer(100));
export default insertionSort;
