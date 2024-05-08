import randomizer from './randomizer.js';
//Bubble Sort
//Bubble Sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
//compares each pair of adjacent items and swaps them if they are in the wrong order.
//The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.
//The algorithm gets its name from the way smaller elements "bubble" to the top of the list.
//Time Complexity: O(n^2)
//Space Complexity: O(1)
//Stable: Yes
//In-Place: Yes
//Usage: Bubble Sort is not a practical sorting algorithm when n is large.
//It will not be efficient in the worst and average cases.
//It is mainly used for educational purposes.
//The only advantage of Bubble Sort is that it is easy to implement.
//The main disadvantage of Bubble Sort is its poor efficiency.
//Bubble Sort is not suitable for large datasets.

const bubbleSort = (arr) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  console.log(arr);
  return arr;
};

bubbleSort(randomizer(100));
