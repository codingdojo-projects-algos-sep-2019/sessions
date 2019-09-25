

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;

  }

  printValues() {
    if (this.left) {
      this.left.printValues();
    }

    console.log('left value is ', this.value);

    if (this.right) {
      this.right.printValues();
    }

    // console.log('right value is ', this.value);
  }

  containsValue(value) {
    if (this.value === value) {
      return true;
    }

    if (value < this.value) {
      // go left 
      if (this.left) {
        return this.left.containsValue(value);
      }
    } else {
      // go right 
      if (this.right) {
        return this.right.containsValue(value);
      }
    }
    return false;
  }

  addNode(node) {
    if (node.value < this.value) {
      if (this.left) {
        return this.left.addNode(node);
      }

      this.left = node;
    } else {
      if (this.right) {
        return this.right.addNode(node);
      }

      this.right = node;
    }
    return this;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }


  add(value) {
    const node = new Node(value);

    if (this.root === null) {
      console.log('setting root node')
      this.root = node;
    } else {
      let currentNode = this.root;

      while (currentNode) {
        if (node.value < currentNode.value) {
          if (currentNode.left !== null) {
            currentNode = currentNode.left;
            console.log('advancing on the left', currentNode.value);
          } else {
            console.log('setting new node to left ', currentNode.value, node.value);
            currentNode.left = node;
            break;
          }
        } else {
          if (currentNode.right !== null) {
            console.log('advancing on the right', currentNode.value);
            currentNode = currentNode.right;
          } else {
            console.log('setting new node to right ', currentNode.value, node.value);
            currentNode.right = node;
            break;
          }
        }
      }

      console.log('done setting node');

      return this;
    }
  }

  add2(value) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
    } else {
      this.root.addNode(node);
    }
  }

  isEmpty() {
    return this.root === null;
  }

  contains(value) {
    if (this.isEmpty()) {
      return false;
    }
    return this.root.containsValue(value);
  }

  print() {
    if (this.isEmpty()) {
      return console.log('no nodes in tree');
    }

    return this.root.printValues();
  }

}

const tree = new Tree();


tree.add2(15);
tree.add2(25);
tree.add2(22);
tree.add2(35);
tree.add2(10);
tree.add2(12);
tree.add2(9);
tree.add2(7);

console.log('contains? ', tree.contains(17));
console.log('contains? ', tree.contains(9));

console.log(tree);

tree.print();