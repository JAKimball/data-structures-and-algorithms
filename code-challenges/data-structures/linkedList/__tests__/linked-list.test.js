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

describe('Testing .kthFromEnd(k).', () => {

  test('Where k is greater than the length of the linked list', () => {
    const ll = new linkedList.LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    expect(() => ll.kthFromEnd(5)).toThrow('5 is too big for the linked list length of 4');
  });

  test('Where k and the length of the list are the same', () => {
    const ll = new linkedList.LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    expect(() => ll.kthFromEnd(4)).toThrow('4 is too big for the linked list length of 4');
  });

  test('Where k is not a positive integer', () => {
    const ll = new linkedList.LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    expect(() => ll.kthFromEnd(-4)).toThrow('Method kthFromEnd called with negative number -4');
  });

  test('Where the linked list is of a size 1', () => {
    const ll = new linkedList.LinkedList();
    ll.append('only one');
    expect(ll.kthFromEnd(0)).toEqual('only one');
  });

  test('Where the linked list has no nodes', () => {
    const ll = new linkedList.LinkedList();
    expect(() => ll.kthFromEnd(0)).toThrow('0 is too big for the linked list length of 0');
  });

  test('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    const ll = new linkedList.LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append('this one');
    ll.append(4);
    expect(ll.kthFromEnd(1)).toEqual('this one');
  });

});

describe('Testing .getNthNode(n)', () => {

  test('Where n is greater than the length of the linked list', () => {
    const ll = new linkedList.LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    expect(() => ll.getNthNode(5)).toThrow('The linked list is shorter than 5 nodes.');
  });

  test('Where n and the length of the list are the same', () => {
    const ll = new linkedList.LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append('this one');
    expect(ll.getNthNode(4).value).toEqual('this one');
  });

  test('Where n is not a positive integer', () => {
    const ll = new linkedList.LinkedList();
    ll.append(1);
    ll.append(2);
    expect(() => ll.getNthNode(-2)).toThrow('Method getNthNode(n) called with n less than 1.');
  });

  test('Where the linked list is of a size 1', () => {
    const ll = new linkedList.LinkedList();
    ll.append('only one');
    expect(ll.getNthNode(1).value).toEqual('only one');
  });

  test('Where the linked list has no nodes', () => {
    const ll = new linkedList.LinkedList();
    expect(() => ll.getNthNode(1)).toThrow('The linked list is shorter than 1 nodes.');
  });

  test('“Happy Path” where n is not at the end, but somewhere in the middle of the linked list', () => {
    const ll = new linkedList.LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append('this one');
    ll.append(4);
    expect(ll.getNthNode(3).value).toEqual('this one');
  });

});

describe('Testing .mergeLists(list1, list2)', () => {

  test('Example 1: list1 has 3 nodes vs. list2 with 3 nodes.', () => {
    const ll1 = new linkedList.LinkedList();
    ll1.append(1);
    ll1.append(2);
    ll1.append(3);
    const ll2 = new linkedList.LinkedList();
    ll2.append(11);
    ll2.append(12);
    ll2.append(13);
    expect(linkedList.mergeLists(ll1, ll2).toString()).toEqual('1,11,2,12,3,13');
  });

  test('Example 2: list1 has 2 nodes vs. list2 with 3 nodes.', () => {
    const ll1 = new linkedList.LinkedList();
    ll1.append(1);
    ll1.append(2);
    const ll2 = new linkedList.LinkedList();
    ll2.append(11);
    ll2.append(12);
    ll2.append(13);
    expect(linkedList.mergeLists(ll1, ll2).toString()).toEqual('1,11,2,12,13');
  });

  test('Example 3: list1 has 3 nodes vs. list2 with 2 nodes.', () => {
    const ll1 = new linkedList.LinkedList();
    ll1.append(1);
    ll1.append(2);
    ll1.append(3);
    const ll2 = new linkedList.LinkedList();
    ll2.append(11);
    ll2.append(12);
    expect(linkedList.mergeLists(ll1, ll2).toString()).toEqual('1,11,2,12,3');
  });

  test('Example 4: list1 has 3 node vs. list2 with 1 nodes.', () => {
    const ll1 = new linkedList.LinkedList();
    ll1.append(1);
    ll1.append(2);
    ll1.append(3);
    const ll2 = new linkedList.LinkedList();
    ll2.append(11);
    expect(linkedList.mergeLists(ll1, ll2).toString()).toEqual('1,11,2,3');
  });

  test('Example 5: list1 has 1 node vs. list2 with 3 nodes.', () => {
    const ll1 = new linkedList.LinkedList();
    ll1.append(1);
    const ll2 = new linkedList.LinkedList();
    ll2.append(11);
    ll2.append(12);
    ll2.append(13);
    expect(linkedList.mergeLists(ll1, ll2).toString()).toEqual('1,11,12,13');
  });

  test('Example 6: list2 has no nodes.', () => {
    const ll1 = new linkedList.LinkedList();
    ll1.append(1);
    ll1.append(2);
    ll1.append(3);
    const ll2 = new linkedList.LinkedList();
    expect(linkedList.mergeLists(ll1, ll2).toString()).toEqual('1,2,3');
  });

  test('Example 7: list1 has no nodes.', () => {
    const ll1 = new linkedList.LinkedList();
    const ll2 = new linkedList.LinkedList();
    ll2.append(11);
    ll2.append(12);
    ll2.append(13);
    expect(linkedList.mergeLists(ll1, ll2).toString()).toEqual('11,12,13');
  });
});
