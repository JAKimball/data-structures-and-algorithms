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
   * @param {*} value
   * @memberof Node
   */
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * The Stack class.
 *
 * @class Stack
 */
class Stack {
  /**
   * Creates an instance of Stack.
   * @memberof Stack
   */
  constructor() {
    this.top = null;
  }

  /**
   * Takes any value as an argument and adds a new node
   * with that value to the top of the stack
   *
   * @param {*} value Value of the new node pushed onto the stack
   * @memberof Stack
   */
  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  /**
   * Removes the node from the top of the stack, and returns the
   * node’ s value.
   *
   * @returns Value of the top node
   * @memberof Stack
   */
  pop() {
    if (this.top) {
      const popped = this.top;
      this.top = popped.next;
      popped.next = null; // TODO: is this really needed to ensure garbage collection?  This object goes out of scope!
      return popped.value;
    } else {
      throw 'Attempt to pop from empty stack.';
    }
  }

  /**
   * Returns the value of the node located on top of the stack,
   * without removing it from the stack.
   *
   * @returns Value of the top node
   * @memberof Stack
   */
  peek() {
    return this.top ? this.top.value : null;
  }

  /**
   * Returns a boolean indicating if the stack is empty.
   *
   * @returns True if the stack is empty, otherwise false.
   * @memberof Stack
   */
  isEmpty() {
    return this.top ? false : true;
  }
}

/**
 * The Queue Class
 *
 * @class Queue
 */
class Queue {
  /**
   * Creates an instance of Queue.
   * @memberof Queue
   */
  constructor() {
    this.front = null;
    this.back = null;
  }

  /**
   * Takes any value as an argument and adds a new node with that
   * value to the back of the queue.
   *
   * @param {*} value Value of the new node
   * @memberof Queue
   */
  enqueue(value) {
    const newNode = new Node(value);
    if (this.back) {
      this.back.next = newNode;
    } else {
      this.front = newNode;
    }
    this.back = newNode;
  }

  /**
   * Removes the node from the front of the queue, and returns the
   * node’s value.
   *
   * @returns Value of the removed node
   * @memberof Queue
   */
  dequeue() {
    if (this.front) {
      const temp = this.front;
      this.front = temp.next;
      if (!this.front) {
        this.back = null;
      }
      temp.next = null; // TODO: is this really needed to ensure garbage collection?  This object goes out of scope!  May depend on JS engine being used.
      return temp.value;
    } else {
      throw 'Attempted to dequeue an empty queue.';
    }
  }

  /**
   * Returns the value of the node in the front of the queue without
   * removing it.
   *
   * @returns Value of the node at the front of the queue
   * @memberof Queue
   */
  peek() {
    return this.front ? this.front.value : null;
  }

  /**
   * Returns a boolean indicating if the queue is empty.
   *
   * @returns True if the queue is empty, otherwise false.
   * @memberof Queue
   */
  isEmpty() {
    return this.front ? false : true;
  }

}

module.exports = {
  Node,
  Stack,
  Queue,
};
