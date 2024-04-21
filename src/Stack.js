/*
Stack Operations:
1. Create Stack -- creates a new stack
2. Push -- adds an element to the stack
3. Pop -- removes the top element of the stack
4. Peek -- returns the top element of the stack
5. isEmpty -- checks if the stack is empty
6. Print
7. Delete Stack
 */

class StackArray {
  constructor() {
    this.list = [];
  }
  //method to add an element to the stack
  push(value) {
    this.list.push(value);
  }
  //method to remove the top element of the stack
  pop() {
    return this.list.pop();
  }
  //method to return the top element of the stack
  peek() {
    if (this.isEmpty()) {
      console.log('Stack is empty');
      return this;
    }
    console.log(this.list[0]);
    return this;
  }
  //method to check if the stack is empty
  isEmpty() {
    return this.list.length === 0;
  }
  //method to print the stack
  print() {
    if (this.isEmpty()) {
      console.log('Stack is empty');
      return this;
    }
    const list = [];
    console.log(this.list);
    return this;
  }
}
// const stackArray = new StackArray();
// stackArray.push(1);
// stackArray.push(2);
// stackArray.push(3);
// stackArray.push(4);
// stackArray.push(5);
// stackArray.print();
// stackArray.pop();
// stackArray.pop();
// stackArray.pop();
// stackArray.print();
// stackArray.pop();
// stackArray.pop();
// stackArray.print();
// stackArray.peek();
// console.log(stackArray.isEmpty());

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class StackLinkedList {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  //method to check if the stack is empty
  isEmpty() {
    return this.length === 0;
  }
  //method to add an element to the stack
  push(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.top = node;
      this.bottom = node;
    } else {
      const holdingPointer = this.top;
      this.top = node;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  //method to remove last node from the stack
  pop() {
    if (this.isEmpty()) {
      console.log('Stack is empty');
      return this;
    }
    let current = this.top;
    this.top = current.next;
    current.next = null;
    this.length--;
    return current;
  }
  //method to return the top element of the stack
  peek() {
    if (this.isEmpty()) {
      console.log('Stack is empty');
      return this;
    }
    console.log('First element in the stack', this.top);
    return this;
  }
  //method to print the stack
  print() {
    if (this.isEmpty()) {
      console.log('Stack is empty');
      return this;
    }
    const list = [];
    let current = this.top;
    while (current) {
      list.push(current.value);
      current = current.next;
    }
    console.log('STACK:', list);
    return this;
  }
  //method to delete the stack
  delete() {
    if (this.isEmpty()) {
      console.log('Stack is empty');
      return this;
    }
    this.top = null;
    this.bottom = null;
    this.length = 0;
    console.log('Stack deleted successfully');

    return this.print();
  }
}
// const myStack = new StackLinkedList();
// myStack.push(1).push(2).push(3).push(4).push(5).print().peek();
// myStack.pop();
// myStack.pop();
// myStack.print().peek().delete();
