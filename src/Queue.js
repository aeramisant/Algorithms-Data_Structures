//Queue Operations
// 1. Create Queue -- creates a new queue
// 2. Enqueue -- adds an element to the queue
// 3. Dequeue -- removes the front element of the queue
// 4. Peek -- returns the front element of the queue
// 5. isEmpty -- checks if the queue is empty
// 6. Print -- prints the queue
// 7. Delete Queue -- deletes the queue
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //method to check if the queue is empty
  isEmpty() {
    return this.length < 1;
  }
  //method to add an element to the queue
  enqueue(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  //method to remove element from the queue
  dequeue() {
    if (this.isEmpty()) {
      console.log('Queue is empty');
      return this;
    }
    let element = this.head;
    this.head = this.head.next;
    element.next = null;
    this.length--;
    console.log('Element removed:', element);
    return element;
  }
  //method to see the front element of the queue
  peek() {
    if (this.isEmpty()) {
      console.log('Queue is empty');
      return this;
    }
    console.log('First element:', this.head.value);
    return this;
  }
  //print queue
  print() {
    if (this.isEmpty()) {
      console.log('Queue is empty');
      return this;
    }
    let queue = [];
    let current = this.head;
    while (current) {
      queue.push(current.value);
      current = current.next;
    }
    console.log('QUEUE:', queue);
    return this;
  }
  //method to delete the queue
  delete() {
    if (this.isEmpty()) {
      console.log('Queue is empty');
      return this;
    }
    this.head = null;
    this.tail = null;
    this.length = 0;
    console.log('Queue deleted successfully');
    return this.print();
  }
}

// const myQueue = new Queue();
// myQueue.enqueue(1).enqueue(2).enqueue(3).enqueue(4).print();
// myQueue.dequeue();
// myQueue.print();
// myQueue.dequeue();
// myQueue.print().peek().delete();
