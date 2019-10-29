'use strict';

const { PseudoQueue } = require('../queueWithStacks/queue-with-stacks');

describe('Testing pseudoQueue class', () => {

  test('Can successfully enqueue into a queue', () => {
    const queue = new PseudoQueue();
    expect(queue.isEmpty()).toEqual(true);
    queue.enqueue('enqueued');
    expect(queue.isEmpty()).toEqual(false);
    expect(queue.dequeue()).toEqual('enqueued');
    expect(queue.isEmpty()).toEqual(true);
  });

  test('Can successfully enqueue multiple values into a queue', () => {
    const queue = new PseudoQueue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(3);
    expect(queue.isEmpty()).toEqual(true);
  });

  test('Can successfully dequeue out of a queue the expected value', () => {
    const queue = new PseudoQueue();
    queue.enqueue(1);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.isEmpty()).toEqual(true);
  });

  test('Can successfully peek into a queue, seeing the expected value', () => {
    const queue = new PseudoQueue();
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
    const queue = new PseudoQueue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(3);
    expect(queue.isEmpty()).toEqual(true);
  });

  test('Can successfully enqueue multiple items dequeue partially, enqueue again with other values, then dequeue completely with expected results', () => {
    const queue = new PseudoQueue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
    queue.enqueue(4);
    queue.enqueue(5);
    expect(queue.dequeue()).toEqual(3);
    expect(queue.dequeue()).toEqual(4);
    expect(queue.dequeue()).toEqual(5);
    expect(queue.isEmpty()).toEqual(true);
  });

  test('Can successfully instantiate an empty queue', () => {
    const queue = new PseudoQueue();
    expect(queue.isEmpty()).toEqual(true);
  });

  test('Throws exception when attempting to dequeue an empty queue', () => {
    const queue = new PseudoQueue();
    expect(() => queue.dequeue()).toThrow('Attempted to dequeue an empty queue.');
  });

});
