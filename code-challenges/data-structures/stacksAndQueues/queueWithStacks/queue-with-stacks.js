'use strict';

const stacks = require('../stacks-and-queues');

/**
 * The PseudoQueue Class
 *
 * Implements a queue using two stacks internally.
 *
 * @class PseudoQueue
 */
class PseudoQueue {
  /**
   * Creates an instance of PseudoQueue.
   * @memberof PseudoQueue
   */
  constructor() {
    this.inStack = new stacks.Stack();
    this.outStack = new stacks.Stack();
  }

  /**
   * Takes any value as an argument and adds a new node with that
   * value to the back of the queue.
   *
   * @param {*} value Value of the new node
   * @memberof PseudoQueue
   */
  enqueue(value) {
    while (this.outStack.peek()) {
      this.inStack.push(this.outStack.pop());
    }
    this.inStack.push(value);
  }

  /**
   * Removes the node from the front of the queue, and returns the
   * node’s value.
   *
   * @returns Value of the removed node
   * @memberof Queue
   */
  dequeue() {
    if (this.isEmpty()) {
      throw 'Attempted to dequeue an empty queue.';
    }
    while (this.inStack.peek()) {
      this.outStack.push(this.inStack.pop());
    }
    return this.outStack.pop();
  }

  /**
   * Returns the value of the node in the front of the queue without
   * removing it.
   *
   * @returns Value of the node at the front of the queue
   * @memberof Queue
   */
  peek() {
    while (this.inStack.peek()) {
      this.outStack.push(this.inStack.pop());
    }
    return this.outStack.peek();
  }

  /**
   * Returns a boolean indicating if the queue is empty.
   *
   * @returns True if the queue is empty, otherwise false.
   * @memberof Queue
   */
  isEmpty() {
    return (!this.inStack.peek()) && !(this.outStack.peek());
  }

}

module.exports = { PseudoQueue };
