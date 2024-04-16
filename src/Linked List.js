// /*
// /**
//  * Represents a node in a Linked List.
//  * @class
//  */
// class Node {
//     /**
//      * Create a new Node.
//      * @param {*} value - The value to be stored in the node.
//      */
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// /**
//  * Represents a Linked List.
//  * @class
//  */
// class LinkedList {
//     /**
//      * Create a new Linked List.
//      */
//     constructor() {
//         this.head = null;
//         this.tail = null;
//     }

//     /**
//      * Add a new node to the end of the Linked List.
//      * @param {*} value - The value to be added.
//      */
//     append(value) {
//         const newNode = new Node(value);

//         if (!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//     }

//     /**
//      * Insert a new node at the specified index in the Linked List.
//      * @param {*} value - The value to be inserted.
//      * @param {number} index - The index at which the value should be inserted.
//      */
//     insert(value, index) {
//         if (index < 0 || index > this.length()) {
//             throw new Error('Invalid index');
//         }

//         const newNode = new Node(value);

//         if (index === 0) {
//             newNode.next = this.head;
//             this.head = newNode;
//             if (!this.tail) {
//                 this.tail = newNode;
//             }
//         } else {
//             let current = this.head;
//             let previous = null;
//             let currentIndex = 0;

//             while (currentIndex < index) {
//                 previous = current;
//                 current = current.next;
//                 currentIndex++;
//             }

//             newNode.next = current;
//             previous.next = newNode;

//             if (!current) {
//                 this.tail = newNode;
//             }
//         }
//     }

//     /**
//      * Remove the node at the specified index from the Linked List.
//      * @param {number} index - The index of the node to be removed.
//      */
//     remove(index) {
//         if (index < 0 || index >= this.length()) {
//             throw new Error('Invalid index');
//         }

//         if (index === 0) {
//             this.head = this.head.next;
//             if (!this.head) {
//                 this.tail = null;
//             }
//         } else {
//             let current = this.head;
//             let previous = null;
//             let currentIndex = 0;

//             while (currentIndex < index) {
//                 previous = current;
//                 current = current.next;
//                 currentIndex++;
//             }

//             previous.next = current.next;

//             if (!current.next) {
//                 this.tail = previous;
//             }
//         }
//     }

//     /**
//      * Get the length of the Linked List.
//      * @returns {number} The length of the Linked List.
//      */
//     length() {
//         let count = 0;
//         let current = this.head;

//         while (current) {
//             count++;
//             current = current.next;
//         }

//         return count;
//     }
// }
//////////////////////////////////////////////////////////////////////////
//create a Node class for the linked list unit
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//create a LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //add a new node to the end of the linked list
  appendNode(value) {
    const newNode = new Node(value);
    if (this.length < 1) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  //add new node to the beginning of the linked list
  prependNode(value) {
    const newNode = new Node(value);
    if (this.length < 1) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //insert a new node at the specified index in the linked list
  insertNode(index, value) {
    const newNode = new Node(value);
    if (index < 0 || index > this.length) {
      throw new Error('Invalid index');
    }
    if (this.length === 0) {
      return this.appendNode(value);
    }
    if (index === 0) {
      return this.prependNode(value);
    }
    if (index === this.length) {
      return this.appendNode(value);
    }
    let current = this.head;
    let count = 0;
    while (count <= index && current) {
      let temp;
      if (count === index - 1) {
        temp = current.next;
        newNode.next = temp;
        current.next = newNode;
      } else {
        current = current.next;
      }
      count++;
    }
    this.length++;
    return this;
  }
  //search for a node at a specific index and return value and index
  searchNode(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        console.log(
          `The value ${current.value} is found in the linked list at index ${index}`
        );
        return { value: current.value, index };
      }
      current = current.next;
      index++;
    }
    console.log(`The value ${value} is not found in the linked list`);
    return this;
  }

  //get Node at a specific index and return the Node
  getNode(index) {
    if (index < 0 || index > this.length) {
      throw new Error('Invalid index');
    }
    let current = this.head;
    let count = 0;
    while (count <= index && current) {
      if (count === index) {
        console.log(`Node at index ${index}:`, current);
        return current;
      }
      count++;
      current = current.next;
    }
    console.log(`Node at index ${count} is not found`);
    return this;
  }

  //update value of a Node at a specific index
  updateNode(index, value) {
    const node = this.getNode(index);
    if (node) {
      node.value = value;
      console.log(`Node at index ${index} is updated to ${value}`);
      return this;
    }
    console.log(`Node at index ${index} is not found`);
    throw new Error('Invalid index');
  }

  //remove first node from the linked list
  removeFirstNode() {
    if (this.length < 1) {
      console.log('Linked list is empty');
      return this;
    }
    const firstNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = firstNode.next;
      firstNode.next = null;
      console.log('First node is removed', firstNode);
    }
    this.length--;
    return firstNode;
  }

  //remove last node from the linked list
  removeLastNode() {
    const prevIndex = this.getLastIndex() - 1;
    const prevNode = this.getNode(prevIndex);
    const lastNode = prevNode.next;
    prevNode.next = null;
    this.tail = prevNode;
    this.length--;
    console.log('Last node is removed', lastNode);
    return this;
  }

  //remove node at a specific index
  removeNode(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Invalid index');
    }
    if (index === 0) {
      return this.removeFirstNode();
    } else {
      const prevNode = this.getNode(index - 1);
      const nodeAfter = prevNode.next.next;
      const nodeToRemove = prevNode.next;
      nodeToRemove.next = null;
      prevNode.next = nodeAfter;
      console.log(`Node at index ${index} is removed`, nodeToRemove);
      this.length--;
      return this;
    }
  }

  //delete all nodes from the linked list
  deleteAllNodes() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    console.log('All nodes are deleted');
    return this;
  }

  //remove duplicate nodes from the linked list
  removeDuplicates() {
    if (this.length <= 1) {
      console.log('Linked list has no duplicates');
      return this;
    }
    const uniqueValues = [];
    let current = this.head;
    while (current) {
      if (uniqueValues.includes(current.value)) {
        const currentNode = this.searchNode(current.value);
        this.removeNode(currentNode.index);
      } else {
        uniqueValues.push(current.value);
      }
      current = current.next;
    }
    console.log('Duplicate nodes are removed');
    return this;
  }

  //get the middle node of the linked list, if the length is even, return the second middle node
  getMiddleNode() {
    let middleIndex = Math.round(this.length / 2) - 1;
    console.log('Middle index:', middleIndex);
    this.getNode(middleIndex);
    return this;
  }

  //reverse original linked list
  reverseList() {
    let current = this.head;
    let prev = null;
    let next = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
    this.tail = this.getNode(this.length - 1);
    console.log('Linked list is reversed', {
      head: this.head.value,
      tail: this.tail.value,
    });
    return this;
  }

  //get last index of the linked list
  getLastIndex() {
    console.log('Last index:', this.length - 1);
    return this.length - 1;
  }
  //print the linked list
  printList() {
    if (this.length < 1) {
      console.log('Linked list is empty');
      return this;
    }
    const list = [];
    let current = this.head;
    while (current) {
      list.push(current.value);
      current = current.next;
    }
    console.log(list, { head: this.head.value, tail: this.tail.value });
    return this;
  }
}

const myLinkedList = new LinkedList();
myLinkedList
  .appendNode(1)
  .appendNode(5)
  .prependNode(0)
  .prependNode(-1)
  .prependNode(-2)
  .appendNode(6)
  .appendNode(12)
  .prependNode(10)
  .insertNode(3, 3)
  .insertNode(0, 12)
  .insertNode(9, 9);
// myLinkedList.searchNode(6);
// myLinkedList.getNode(myLinkedList.getLastIndex());
myLinkedList.updateNode(5, 10);
// myLinkedList.removeFirstNode();
// myLinkedList.removeLastNode();
// myLinkedList.removeNode(2);
myLinkedList.printList();
// myLinkedList.deleteAllNodes();
// myLinkedList.printList();
myLinkedList.removeDuplicates().printList().getLastIndex();
myLinkedList.getMiddleNode().reverseList().printList();
