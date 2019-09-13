

class Node {
  constructor(value) {
    this.value = value
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
  }

  /** 
   * Add Front
Rudy isn’t nice: he cuts in line in front of everyone else. 
Given a pointer to the first ListNode and a value, create a new node, assign it to the list head, 
and return a pointer to the new head node.
  */
  addFront(value) {
    const node = new Node(value);

    node.next = this.head;

    this.head = node;
  }

  /**  
   * Remove Front
Ha! Rudy is getting what he deserves – kicked out of line. 
Given a pointer to the first node in a list, remove the head node and return the new list head node. 
If the list is empty, return null. (return the value from the removed node)
  */
  removeFront() {
    if (this.head === null) {
      return null;
    }

    const node = this.head;

    this.head = node.next;

    return node.value;
  }

  /** 
   * Front
Finally, Tad and Sam reach the front of the line to get movie tickets. 
Oh no – only one seat remains! Who was earlier in line: Tad or Sam? 
Return the value (not the node) at the head of the list. 
If the list is empty, return null.
  */
  front() {
    if (this.head === null) {
      return null;
    }

    return this.head.value;
  }

  /**  
   * Contains
Sam thinks Tad might be somewhere in a very long line waiting to attend the Superman movie. 
Given a ListNode pointer and a val, return whether val is found in any node in the list.
  */
  contains(searchContent) {
    let current = this.head;


    while (current !== null) {
      console.log('current is ', current);
      if (current.value === searchContent) {
        return true;
      }

      current = current.next;
    }

    return false;
  }

  /**  
   * July 20, 2013: about 5000 people wait in line for a chance to audition for American Idol. 
   * Create a function that accepts a pointer to the first list node, and returns number of nodes in that SList.
   * 
  */
  length() {
    let count = 0;

    this.traverse(function (node) {
      count++;
      console.log('current count is ' + count);
    });

    return count;
  }

  isEmpty() {
    // (expression) ? (if true) : (if false);

    return this.head === null;
  }

  traverse(callback) {
    let current = this.head;

    while (current !== null) {
      // run function
      callback(current);
      current = current.next;
    }
  }


  /**  
   * Create display(node) for debugging that returns a string containing all list values. 
   * Build what you wish console.log(myList) did!
  */
  display() {
    console.log('pprinting list');

    let current = this.head;

    while (current !== null) {
      console.log(`Node has value of ${current.value}`);
      current = current.next;
    }

    console.log('list pprinting complete');
  }

  print() {
    console.log('pprinting list');


    this.traverse(function (node) {
      console.log(`Node has value of ${node.value}`);
    });

    console.log('list pprinting complete');
  }

  /** 
   * American Idol seems to air singers that are the best, and a few that seem like the worst! 
   * Create function max(node) to return list’s largest val.
  */
  max() {
    let largest = null;

    this.traverse(function (cat) {
      console.log('largest is ', largest);
      if (cat.value > largest) {
        largest = cat.value;
      }
    });

    return largest;
  }

  /** 
   * Create average(node) to return average val.
  */

  average() {
    const length = this.length();
    let sum = 0;
    // this.traverse(function (node) {
    //   sum += node.value;
    // });
    this.traverse(node => sum += node.value);

    return this.isEmpty() ? null : sum / length;
  }

}


const list = new List();


// const node1 = new Node(10);
// const node2 = new Node(15);
// const node3 = new Node(20);

// list.head = node1;

// node1.next = node2;
// node2.next = node3;

// console.log(node1);
// console.log(node2);
// console.log(node3);
// list.addFront(10);
// list.addFront(77);
// list.addFront(15);
// list.addFront(20);
console.log(list);

// console.log(list.removeFront());

console.log('----before front')
console.log(console.log(list));
console.log(list.front())
console.log(list);

console.log(list.contains(90));
console.log(list.length());

console.log(list.isEmpty());

list.print();
list.max();
console.log(list.average());