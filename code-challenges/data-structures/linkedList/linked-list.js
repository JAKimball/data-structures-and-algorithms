'use strict';

/**
 * The Node class.  Instances of Node make up the actual
 * linked list of the LinkedList class.
 *
 * @class Node
 */
class Node {
  /**
   * Creates an instance of Node.
   * @param {*} value The value of the node.
   * @memberof Node
   */
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * The LinkedList class.
 *
 * @class LinkedList
 */
class LinkedList {
  /**
   *Creates an instance of LinkedList.
   * @memberof LinkedList
   */
  constructor() {
    this.head = null;
  }

  /**
   * Takes any value as an argument and adds a new node with that
   * value to the head of the list.
   *
   * @param {*} value
   * @memberof LinkedList
   */
  insert(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  /**
   * Adds a new node with the given value to the end of the list.
   *
   * @param {*} value Value of the new node
   * @memberof LinkedList
   */
  append(value) {
    const newNode = new Node(value);
    if (this.head) {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    } else {
      this.head = newNode;
    }
  }

  /**
   * Returns a boolean indicating if the given value is equal to any
   * Node's value in the list.
   *
   * @param {*} value
   * @returns True if the value is found on a node in the list.  False if not.
   * @memberof LinkedList
   */
  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  /**
   * Adds a new node with the given newValue immediately
   * before the first value node.
   *
   * @param {*} value Value to find in the linked list.
   * @param {*} newVal Value of the new node
   * @memberof LinkedList
   */
  insertBefore(value, newVal) {
    let current = this.head;
    let previous;
    while ((current) && (current.value !== value)) {
      previous = current;
      current = current.next;
    }
    if (!current) {
      throw `Value ${value} not found in linked list.`;
    } else {
      const newNode = new Node(newVal);
      newNode.next = current;
      if (current === this.head) {
        this.head = newNode;
      } else {
        previous.next = newNode;
      }
    }
  }

  /**
   * Adds a new node with the given value immediately
   * after the first value node.
   *
   * @param {*} value Value to find in the linked list.
   * @param {*} newVal Value of the new node
   * @memberof LinkedList
   */
  insertAfter(value, newVal) {
    let current = this.head;
    while ((current) && (current.value !== value)) {
      current = current.next;
    }
    if (!current) {
      throw `Value ${value} not found in linked list.`;
    } else {
      const newNode = new Node(newVal);
      newNode.next = current.next;
      current.next = newNode;
    }
  }

  /**
   * Return the current count of nodes in the linked list.
   *
   * @returns the current count of nodes in the linked list.
   * @memberof LinkedList
   */
  getLength() {
    let current = this.head;
    let length = 0;

    while (current) {
      length++;
      current = current.next;
    }
    return length;
  }

  /**
   * Return the Node at the nth position in the linked list.
   *
   * @param {Number} n
   * @returns The Node at the nth position in the linked list
   * @memberof LinkedList
   */
  getNthNode(n) {
    if (n < 1) {
      throw `Method getNthNode(n) called with n less than 1.`;
    }

    let current = this.head;
    let length = 0;

    while (current) {
      length++;
      if (length === n) {
        return current;
      }
      current = current.next;
    }
    throw `The linked list is shorter than ${n} nodes.`;
  }

  /**
   * Given a number, k, return the value of the node that is k from the
   * end of the linked list.
   *
   * @param {Number} k
   * @returns The value of the Node that is k from the end of the list
   * @memberof LinkedList
   */
  kthFromEnd(k) {
    if (k < 0) {
      throw `Method kthFromEnd called with negative number ${k}.`;
    }
    let length = this.getLength();
    if (k >= length) {
      throw `${k} is too big for the linked list length of ${length}`;
    }
    let foundNode = this.getNthNode(length - k);
    return foundNode.value;
  }

  /**
   * Returns a string representing all the values in the linked list.
   *
   * @returns string representing all the values in the linked list.
   * @memberof LinkedList
   */
  toString() {
    let current = this.head;
    const values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values.join(',');
  }

}

/**
 * Takes two linked lists as arguments and Zips the two linked lists
 * together into one so that the nodes alternate between the two
 * lists and return a reference to the head of the zipped list which
 * will be the list passed in as list1.  This function modifies the
 * node links in-place without making node copies.
 *
 * @param {LinkedList} list1
 * @param {LinkedList} list2
 * @returns list1 zipped with list2
 */
const mergeLists = (list1, list2) => {
  let current = list1.head;
  let alt = list2.head;

  if (!current) {
    list1.head = list2.head;
  } else {

    while (alt) {

      // exchange alt with current.next
      let temp = current.next;
      current.next = alt;
      alt = temp;

      // advance
      current = current.next;
    }

  }
  return list1;
};

module.exports = {
  Node,
  LinkedList,
  mergeLists,
};
