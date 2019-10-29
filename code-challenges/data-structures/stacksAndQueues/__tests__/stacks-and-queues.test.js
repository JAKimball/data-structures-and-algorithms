'use strict';

const { Stack, Queue } = require('../stacks-and-queues');

describe('Testing Stacks and Queues', () => {

  test('Can successfully push onto a stack', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toEqual(true);
    stack.push('pushed');
    expect(stack.isEmpty()).toEqual(false);
    expect(stack.pop()).toEqual('pushed');
    expect(stack.isEmpty()).toEqual(true);
  });

  test('Can successfully push multiple values onto a stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toEqual(3);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
    expect(stack.isEmpty()).toEqual(true);
  });

  test('Can successfully pop off the stack', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.pop()).toEqual(1);
    expect(stack.isEmpty()).toEqual(true);
  });

  test('Can successfully empty a stack after multiple pops', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toEqual(3);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
    expect(stack.isEmpty()).toEqual(true);
  });

  test('Can successfully peek the next item on the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toEqual(2);
    expect(stack.pop()).toEqual(2);
    expect(stack.peek()).toEqual(1);
    expect(stack.pop()).toEqual(1);
    expect(stack.isEmpty()).toEqual(true);
    expect(stack.peek()).toEqual(null);
  });

  test('Can successfully instantiate an empty stack', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toEqual(true);
  });

  test('Throws exception when attempting to dequeue an empty queue', () => {
    const stack = new Stack();
    expect(() => stack.pop()).toThrow('Attempt to pop from empty stack.');
  });

  test('Can successfully enqueue into a queue', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toEqual(true);
    queue.enqueue('enqueued');
    expect(queue.isEmpty()).toEqual(false);
    expect(queue.dequeue()).toEqual('enqueued');
    expect(queue.isEmpty()).toEqual(true);
  });

  test('Can successfully enqueue multiple values into a queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(3);
    expect(queue.isEmpty()).toEqual(true);
  });

  test('Can successfully dequeue out of a queue the expected value', () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.isEmpty()).toEqual(true);
  });

  test('Can successfully peek into a queue, seeing the expected value', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toEqual(1);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.peek()).toEqual(2);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.isEmpty()).toEqual(true);
    expect(queue.peek()).toEqual(null);
  });

  test('Can successfully empty a queue after multiple de-queues', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(3);
    expect(queue.isEmpty()).toEqual(true);
  });

  test('Can successfully instantiate an empty queue', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toEqual(true);
  });

  test('Throws exception when attempting to dequeue an empty queue', () => {
    const queue = new Queue();
    expect(() => queue.dequeue()).toThrow('Attempted to dequeue an empty queue.');
  });

});
