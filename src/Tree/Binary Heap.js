//create a binary heap documentations and implementation
// Binary Heap is a binary tree with the following properties:
// 1. It is a complete binary tree: all levels of the tree are fully filled except possibly for the last level, which is filled from left to right.
// 2. It is either a min-heap or a max-heap:
//    - In a min-heap, for any given node C, if P is a parent node of C, then the key (the value) of P is less than or equal to the key of C.
//    - In a max-heap, for any given node C, if P is a parent node of C, then the key of P is greater than or equal to the key of C.
//
// Binary Heap can be implemented using an array. The root element will be at Arr[0]. For any given element at index i, its left child is at index 2i + 1, and its right child is at index 2i + 2.
//  - Parent node at index i has children at indices 2i + 1 and 2i + 2
//  - Child node at index i has a parent at index floor((i - 1) / 2)

// Implement a Binary Heap class with the following methods:
//Creation of a binary heap
//Peek top of the heap
//Extract Min/Max
//Traversal of the heap
//Size of the heap
//Insertion of a new element
//Deletion of an element
//Delete the entire heap

class BinaryHeap {
  constructor(size) {
    this.customList = new Array(size + 1).fill(null);
    this.heapSize = 0;
    this.maxSize = size + 1;
  }

  peek() {
    if (this.heapSize === 0) {
      return "Heap is empty";
    }
    return this.customList[1];
  }

  sizeOfHeap() {
    console.log("Size of heap is: ", this.heapSize);
    return this.heapSize;
  }

  levelOrderTraversal() {
    if (!this.heapSize) {
      console.log("Heap is empty");
      return;
    } else {
      for (let i = 1; i <= this.heapSize; i++) {
        console.log(this.customList[i]);
      }
    }
    return this;
  }

  heapifyTreeInsert(index, heapType) {
    let parentIndex = Math.floor(index / 2);
    if (index <= 1) {
      return;
    }
    if (heapType === "Min") {
      if (this.customList[index] < this.customList[parentIndex]) {
        let temp = this.customList[index];
        this.customList[index] = this.customList[parentIndex];
        this.customList[parentIndex] = temp;
      }
    } else if (heapType === "Max") {
      if (this.customList[index] > this.customList[parentIndex]) {
        let temp = this.customList[index];
        this.customList[index] = this.customList[parentIndex];
        this.customList[parentIndex] = temp;
      }
    }
    this.heapifyTreeInsert(parentIndex, heapType);
  }

  //Extract Min/Max from the heap
  heapifyTreeExtract(index, heapType) {
    let leftChildIndex = index * 2;
    let rightChildIndex = index * 2 + 1;
    let targetIndex = index;

    // Determine the index of the target node to swap with
    if (heapType === "Min") {
      if (
        leftChildIndex <= this.heapSize &&
        this.customList[leftChildIndex] < this.customList[targetIndex]
      ) {
        targetIndex = leftChildIndex;
      }
      if (
        rightChildIndex <= this.heapSize &&
        this.customList[rightChildIndex] < this.customList[targetIndex]
      ) {
        targetIndex = rightChildIndex;
      }
    } else if (heapType === "Max") {
      if (
        leftChildIndex <= this.heapSize &&
        this.customList[leftChildIndex] > this.customList[targetIndex]
      ) {
        targetIndex = leftChildIndex;
      }
      if (
        rightChildIndex <= this.heapSize &&
        this.customList[rightChildIndex] > this.customList[targetIndex]
      ) {
        targetIndex = rightChildIndex;
      }
    }

    // If the target index has changed, swap the nodes and continue heapifying
    if (targetIndex !== index) {
      let temp = this.customList[index];
      this.customList[index] = this.customList[targetIndex];
      this.customList[targetIndex] = temp;

      // Recursively heapify down
      this.heapifyTreeExtract(targetIndex, heapType);
    }
  }

  extract(heapType) {
    if (this.heapSize === 0) {
      return "Heap is empty";
    }
    let extractedValue = this.customList[1];
    this.customList[1] = this.customList[this.heapSize];
    this.customList[this.heapSize] = null;
    this.heapSize--;
    this.heapifyTreeExtract(1, heapType);
    return extractedValue;
  }

  insert(value, heapType) {
    if (this.heapSize + 1 === this.maxSize) {
      return "Heap is full";
    }
    this.customList[this.heapSize + 1] = value;
    this.heapSize++;
    this.heapifyTreeInsert(this.heapSize, heapType);
    return this;
  }

  deleteHeap() {
    this.customList = new Array(this.maxSize).fill(null);
    this.heapSize = 0;
  }
}

const binaryHeap = new BinaryHeap(5);
binaryHeap
  .insert(4, "Max")
  .insert(5, "Max")
  .insert(2, "Max")
  .insert(3, "Max")
  .insert(1, "Max");
binaryHeap.sizeOfHeap();
binaryHeap.extract("Max");
binaryHeap.levelOrderTraversal();
console.log(binaryHeap, binaryHeap.peek());
