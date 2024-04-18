//create a node for double linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
//create a DoublyLinkedList class
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //method to add the first node to the list
  addFirstNode(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = node;
    this.length++;
    return this;
  }
  //method to add a node to the end of the list
  append(value) {
    if (this.length < 1) {
      return this.addFirstNode(value);
    }
    const node = new Node(value);
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }
  //method to add a node at the beginning of the list
  prepend(value) {
    const node = new Node(value);
    const nextNode = this.head;
    if (this.length < 1) {
      return this.addFirstNode(value);
    }
    nextNode.prev = node;
    node.next = nextNode;
    this.head = node;
    this.length++;
    return this;
  }
  //method to search for a node with a specific value
  searchByValue(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        console.log(`Node with value ${value} found!`, current);
        return this;
      }
      current = current.next;
    }
    console.log(`Node with value ${value} not found!`);
    return this;
  }
  //method to get a node by its index
  getByIndex(index) {
    if (index < 0 || index > this.length - 1) {
      throw new Error('Index out of bounds');
    }
    let current = this.head;
    let count = 0;
    while (count < this.length) {
      if (count === index) {
        console.log(`Node at index ${index} found!`, current);
        return current;
      }
      current = current.next;
      count++;
    }
    console.log(`Node at index ${index} not found!`);
    return;
  }
  //method to change the value of the node at a specific index
  setNodeValue(index, value) {
    const node = this.getByIndex(index);
    if (node) {
      node.value = value;
      console.log(`Node value at index ${index} changed to ${value}`, node);
      return this;
    }
    console.log(`Node at index ${index} not found!`);
    return;
  }
  //method to insert a nwe node at a specific index
  insertNode(index, value) {
    if (index < 0 || index > this.length - 1) {
      throw new Error('Index out of bounds');
    }
    const newNode = new Node(value);
    const prevNode = this.getByIndex(index - 1);
    newNode.next = prevNode.next;
    prevNode.next.prev = newNode;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    this.length++;
    console.log(`Node inserted at index ${index}`, newNode);
    return this;
  }
  //method to remove the first node
  removeFirstNode() {
    if (this.length < 1) {
      console.log('List is empty!');
      return;
    }
    const current = this.head;
    this.head = current.next;
    this.head.prev = null;
    current.next = null;
    this.length--;
    console.log('First node removed!');
    return this;
  }
  //method to remove the last node
  removeLastNode() {
    if (this.length < 1) {
      console.log('List is empty!');
      return;
    }
    const LastNode = this.tail;
    this.tail = LastNode.prev;
    this.tail.next = null;
    LastNode.prev = null;
    this.length--;
    console.log('Last node removed!');
    return this;
  }
  //method to remove a node at a specific index
  removeNode(index) {
    if (index < 0 || index > this.length - 1) {
      throw new Error('Index out of bounds');
    }
    const prevNode = this.getByIndex(index - 1);
    const node = prevNode.next;
    prevNode.next = node.next;
    node.next.prev = prevNode;
    this.length--;
    console.log(`Node at index ${index} removed!`, node);
    return this;
  }
  //method to print the list
  printList() {
    if (this.length === 0) {
      console.log('List is empty!');
      return;
    }
    const list = [];
    let currentNode = this.head;
    while (currentNode) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log('Left to right', list);
    return this;
  }

  //method to print the reversed list
  reversePrintList() {
    const list = [];
    let current = this.tail;
    while (current) {
      list.push(current.value);
      current = current.prev;
    }
    console.log('Right to left', list);
    return this;
  }

  //method to clear the list
  clearList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    console.log('List cleared!');
    return;
  }
}
const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList
  .addFirstNode(1)
  .append(2)
  .append(3)
  .prepend(0)
  .searchByValue(1)
  .insertNode(2, 4)
  .removeFirstNode()
  .removeLastNode()
  .removeNode(1);
// .getByIndex(2)
// .setNodeValue(1, 4);
doublyLinkedList.printList().reversePrintList();
