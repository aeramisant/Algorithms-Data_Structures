import { randomizer } from './helpers.js';
import insertionSort from './insertionSort.js';
//Bucket Sort
//Bucket Sort is a sorting algorithm that works by distributing the elements of an array into a number of buckets.
//Each bucket is then sorted individually, either using a different sorting algorithm, or by recursively applying the bucket sorting algorithm.
//Time Complexity: O(n^2)
//Space Complexity: O(n)
//Stable: Yes
//In-Place: No
//Usage: Bucket Sort is not a practical sorting algorithm when n is large.
//It is mainly used for educational purposes.
//The main advantage of Bucket Sort is that it is easy to implement.
//The main disadvantage of Bucket Sort is its poor efficiency.
//Bucket Sort is not suitable for large datasets.

const bucketSort = (arr) => {
  const numberOfBuckets = Math.round(Math.sqrt(arr.length));
  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);
  const range = maxValue - minValue;
  const bucketArrays = Array.from({ length: numberOfBuckets }, () => []);
  // Distribute elements into buckets
  for (const item of arr) {
    const index_b = Math.floor(
      ((item - minValue) * (numberOfBuckets - 1)) / range
    );
    bucketArrays[index_b].push(item);

    // console.log(index_b, '---', bucketArrays);
  }

  // Sort the elements of each bucket
  for (let i = 0; i < numberOfBuckets; i++) {
    insertionSort(bucketArrays[i]);
  }
  // Concatenate all buckets
  const result = bucketArrays.flat();
  console.log(result);
  return result;
};

// bucketSort(randomizer(100));
bucketSort([1, 4, 3, 7, 49, -1, 4, -4, 0, -10]);
