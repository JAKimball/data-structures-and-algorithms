'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

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

  peek() {
    return this.top ? this.top.value : null;
  }

  isEmpty() {
    return this.top ? false : true;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.back) {
      this.back.next = newNode;
    } else {
      this.front = newNode;
    }
    this.back = newNode;
  }

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
      throw 'Attempted to dequeue an empty stack.';
    }
  }

  peek() {
    return this.front ? this.front.value : null;
  }

  isEmpty() {
    return this.front ? false : true;
  }

}

exports = {
  Node,
  Stack,
  Queue,
};
