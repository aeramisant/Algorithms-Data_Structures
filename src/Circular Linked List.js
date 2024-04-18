//create a Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//create a CircularLinkedList class
class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //method to add the first node to the list
  addFirstNode(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.tail.next = this.head;
    this.length++;
    return this;
  }
  //method to add a node to the end of the list
  append(value) {
    const newNode = new Node(value);
    if (this.length < 1) {
      return this.addFirstNode(value);
    } else {
      newNode.next = this.head;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  //method to add a node to the beginning of the list
  prepend(value) {
    const newNode = new Node(value);
    if (this.length < 1) {
      return this.addFirstNode(value);
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = this.head;
    }
    this.length++;
    return this;
  }

  //method to add a node at a specific index
  addNewNode(value, index) {
    const newNode = new Node(value);
    if (index < 0 || index > this.length - 1) {
      throw new Error('Index out of bounds');
    }
    if (index === this.length - 1) {
      return this.append(value);
    }
    if (index === 0) {
      return this.prepend(value);
    } else {
      let current = this.head;
      let count = 0;
      while (count <= index) {
        if (count === index - 1) {
          newNode.next = current.next;
          current.next = newNode;
          this.length++;
          return this;
        }
        current = current.next;
        count++;
      }
      console.log('Error!!!!!!!!');
      return;
    }
  }
  //method to get a node at a specific index
  getNodeByIndex(index) {
    if (index < 0 || index > this.length - 1) {
      throw new Error('Index out of bounds');
    }
    let current = this.head;
    let count = 0;
    while (count < this.length) {
      if (count === index) {
        console.log('NODE:', current);
        return current;
      }
      current = current.next;
      count++;
    }
  }
  //method to search for a node with a specific value
  searchNode(value) {
    if (this.length < 1) {
      throw new Error('List is empty');
    }
    let current = this.head;
    do {
      if (current.value === value) {
        console.log('NODE:', current);
        return current;
      }
      current = current.next;
    } while (current !== this.head);
    console.log('Node not found');
    return;
  }
  //method to set/change the value of a node at a specific index
  setNodeValue(value, index) {
    if (index < 0 || index > this.length - 1) {
      throw new Error('Index out of bounds');
    }
    const node = this.getNodeByIndex(index);
    node.value = value;
    console.log('Value changed successfully');
    return this;
  }
  //method to remove a node from the end of the list
  removeLastNode() {
    if (this.length < 1) {
      throw new Error('List is empty');
    }
    const beforeLast = this.getNodeByIndex(this.length - 2);
    const last = beforeLast.next;
    beforeLast.next = this.head;
    this.tail = beforeLast;
    this.length--;
    console.log('Node removed successfully', last);
    return this;
  }

  //method to remove a node from the beginning of the list
  removeFirstNode() {
    if (this.length < 1) {
      throw new Error('List is empty');
    }
    const first = this.head;
    this.head = first.next;
    this.tail.next = this.head;
    this.length--;
    console.log('Node removed successfully', first);
    return this;
  }

  //method to remove a node from a specific index
  removeNode(index) {
    let previous = this.getNodeByIndex(index - 1);
    const node = previous.next;
    previous.next = node.next;
    node.next = null;
    this.length--;
    console.log('Node removed successfully', node);
    return this;
  }

  //delete the entire list
  deleteList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    console.log('List deleted successfully');
    return this;
  }

  //method to get a length of the list
  getLength() {
    console.log('LENGTH:', this.length);
    return this.length;
  }

  //method to print the list
  printList() {
    if (!this.head) {
      console.log('List is empty');
      return;
    }
    const list = [];
    let currentNode = this.head;

    if (currentNode.next === this.head) {
      list.push(currentNode.value);
      console.log('LIST:', list);
    } else {
      do {
        list.push(currentNode.value);
        currentNode = currentNode.next;
      } while (currentNode !== this.head);
    }
    console.log('LIST:', list);
    return;
  }
}
/* 
const circularLinkedList = new CircularLinkedList();
circularLinkedList
  .append(1)
  .append(2)
  .append(3)
  .append(4)
  .append(5)
  .append(6)
  .append(7)
  .prepend(0)
  .addNewNode(10, 3);
circularLinkedList.getLength();
circularLinkedList.printList();
circularLinkedList.getNodeByIndex(3);
circularLinkedList.searchNode(10);
circularLinkedList.setNodeValue(100, 3);
circularLinkedList.printList();
circularLinkedList.removeLastNode().removeFirstNode().removeNode(3);
circularLinkedList.printList();
console.log(circularLinkedList.getNodeByIndex(0));
console.log(circularLinkedList.getNodeByIndex(circularLinkedList.length - 1));
*/
