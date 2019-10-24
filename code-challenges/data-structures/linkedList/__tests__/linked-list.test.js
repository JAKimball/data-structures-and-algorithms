'use strict';

const linkedList = require('../linked-list');

describe('Testing LinkedList .append, .insertBefore, and .insertAfter.', () => {
  test('Can successfully add a node to the end of the linked list.', () => {
    const ll = new linkedList.LinkedList();
    ll.append(23);
    expect(ll.head.value).toEqual(23);
    ll.append(47);
    expect(ll.head.next.value).toEqual(47);
  });

  test('Can successfully add multiple nodes to the end of a linked list.', () => {
    const ll = new linkedList.LinkedList();
    ll.append(23);
    expect(ll.head.value).toEqual(23);
    ll.append(47);
    expect(ll.head.next.value).toEqual(47);
    ll.append('testing');
    expect(ll.toString()).toEqual('23,47,testing');
  });

  test('Can successfully insert a node before a node located in the middle of a linked list.', () => {
    const ll = new linkedList.LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    ll.insertBefore(3, 'new-node');
    expect(ll.toString()).toEqual('1,2,new-node,3,4');
  });

  test('Can successfully insert a node before the first node of a linked list.', () => {
    const ll = new linkedList.LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    ll.insertBefore(1, 'new-node');
    expect(ll.toString()).toEqual('new-node,1,2,3,4');
  });

  test('Can successfully insert after a node in the middle of the linked list.', () => {
    const ll = new linkedList.LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    ll.insertAfter(2, 'new-node');
    expect(ll.toString()).toEqual('1,2,new-node,3,4');
  });

  test('Can successfully insert a node after the last node of the linked list.', () => {
    const ll = new linkedList.LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    ll.insertAfter(4, 'new-node');
    expect(ll.toString()).toEqual('1,2,3,4,new-node');
  });

  test('Throws an error if value not found on insertBefore.', () => {
    const ll = new linkedList.LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    expect(() => ll.insertBefore(99, 'new-node')).toThrow('Value 99 not found in linked list.');
  });

  test('Throws an error if value not found on insertAfter.', () => {
    const ll = new linkedList.LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    expect(() => ll.insertAfter(99, 'new-node')).toThrow('Value 99 not found in linked list.');
  });

});

describe('Testing .kthFromEnd.', () => {

  test('');

  test('Where k is greater than the length of the linked list', () => {
    const ll = new linkedList.LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    expect(ll.kthFromEnd(-1)).toEqual(3);
  });

  test('Where k and the length of the list are the same', () => {
    const ll = new linkedList.LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    expect(ll.kthFromEnd(-1)).toEqual(3);
  });

  test('Where k is not a positive integer', () => {
    const ll = new linkedList.LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    expect(ll.kthFromEnd(-1)).toEqual(3);
  });

  test('Where the linked list is of a size 1', () => {
    const ll = new linkedList.LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    expect(ll.kthFromEnd(-1)).toEqual(3);
  });

  test('“ Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    const ll = new linkedList.LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    expect(ll.kthFromEnd(-1)).toEqual(3);
  });


});
