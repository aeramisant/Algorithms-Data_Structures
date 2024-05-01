//Full Binary tree - each node has 0 or 2 children
//Perfect Binary tree - all leaf nodes are at the same level
//Complete Binary tree - all levels are completely filled except possibly the last level and the last level has all keys as left as possible
//Balanced Binary tree - the height of the tree is O(log n) where n is the number of nodes

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);

    // If the tree is empty, set the new node as the root
    if (this.root === null) {
      this.root = newNode;
    } else {
      // Call a helper function to recursively insert the new node
      this.insertNode(this.root, newNode);
    }

    // Print the tree after inserting the new node
    // console.log("Tree after inserting node " + data + ":");
    this.printBST();
    console.log(); // Add a newline for clarity
    // Return the BinarySearchTree instance to enable method chaining
    return this;
  }

  insertNode(node, newNode) {
    // Base case: If the current node is null, set the new node as the current node
    if (node === null) {
      return newNode;
    }

    // If the new node's data is less than the current node's data, go to the left subtree
    if (newNode.data < node.data) {
      // If there's no left child, set the new node as the left child
      if (node.left === null) {
        node.left = newNode;
      } else {
        // If there's a left child, recursively insert the new node into the left subtree
        this.insertNode(node.left, newNode);
      }
    } else {
      // If the new node's data is greater than or equal to the current node's data, go to the right subtree
      // If there's no right child, set the new node as the right child
      if (node.right === null) {
        node.right = newNode;
      } else {
        // If there's a right child, recursively insert the new node into the right subtree
        this.insertNode(node.right, newNode);
      }
    }
  }

  preOrderTraversal(node = this.root) {
    if (!node) {
      return;
    }
    console.log(`Node: ${node.data}`);
    this.preOrderTraversal(node.left);
    this.preOrderTraversal(node.right);
  }

  inOrderTraversal(node = this.root) {
    if (!node) {
      return;
    }
    this.inOrderTraversal(node.left);
    console.log(`Node: ${node.data}`);
    this.inOrderTraversal(node.right);
  }

  postOrderTraversal(node = this.root) {
    if (!node) {
      return;
    }
    this.postOrderTraversal(node.left);
    this.postOrderTraversal(node.right);
    console.log(`Node: ${node.data}`);
  }

  levelOrderTraversal() {
    if (!this.root) {
      return;
    }
    const queue = [];
    queue.push(this.root);
    while (queue.length > 0) {
      const node = queue.shift();
      console.log(`Node: ${node.data}`);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  searchValue(value, node = this.root) {
    if (!node) {
      console.log("Value not found");
      return false;
    }
    if (node.data === value) {
      console.log(`Value ${node.data} found!`);
      return true;
    } else {
      if (value < node.data) {
        return this.searchValue(value, node.left);
      } else {
        return this.searchValue(value, node.right);
      }
    }
  }

  findMinimumNode(node = this.root) {
    if (!node) {
      return null;
    }
    let currentNode = node;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    // console.log(`Minimum node: ${currentNode.data}`);
    return currentNode;
  }

  deleteNode(value, node = this.root) {
    if (!node) {
      console.log("Not Found");
      return node;
    } else {
      if (value < node.data) {
        node.left = this.deleteNode(value, node.left);
      } else if (value > node.data) {
        node.right = this.deleteNode(value, node.right);
      } else {
        let temp = this.findMinimumNode(node.right);
        if (!node.left) {
          temp = node.right;
          node = null;
          return temp;
        } else if (!node.right) {
          temp = node.left;
          node = null;
          return temp;
        }
        node.data = temp.data;
        node.right = this.deleteNode(temp.data, node.right);
      }
      return node;
    }
  }

  deleteBST() {
    this.root = null;
    return;
  }

  printBST(rootNode = this.root, prefix = "", isLeft = true) {
    if (!rootNode) return;
    console.log(prefix + (isLeft ? "├── " : "└── ") + rootNode.data);
    this.printBST(rootNode.right, prefix + (isLeft ? "│   " : "    "), true);
    this.printBST(rootNode.left, prefix + (isLeft ? "│   " : "    "), false);
  }
}
const BST = new BinarySearchTree();
BST.insert(70)
  .insert(50)
  .insert(90)
  .insert(30)
  .insert(60)
  .insert(80)
  .insert(100)
  .insert(20)
  .insert(40)
  .insert(10);
// BST.printBST();
// BST.preOrderTraversal();
// BST.inOrderTraversal();
// BST.postOrderTraversal();
// BST.levelOrderTraversal();
// BST.findMinimumNode();
BST.deleteNode(20);
BST.deleteNode(70);
BST.deleteNode(10);
BST.printBST();
