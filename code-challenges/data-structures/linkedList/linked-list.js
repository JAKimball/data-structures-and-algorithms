'use strict';

/**
 * The Node class.  Instances of Node make up the actual linked list of the LinkedList class.
 *
 * @class Node
 */
class Node {
  /**
   *Creates an instance of Node.
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
   * Adds a new node with the given newValue immediately before the first value node.
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
   * Adds a new node with the given value immediately after the first value node.
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

module.exports = { Node, LinkedList };
