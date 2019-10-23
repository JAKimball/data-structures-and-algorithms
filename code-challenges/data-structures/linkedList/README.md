# Linked List Insertions

## Challenge

Add to our LinkedList class the following methods:

1. .append(value) - Adds a new node with the given value to the end of the list.

2. .insertBefore(value, newVal) - Adds a new node with the given newValue immediately before the first value node.

3. .insertAfter(value, newVal) - Adds a new node with the given value immediately after the first value node.

## Approach & Efficiency

1. .append(value)

    - Create the new instance of Node with the given value and assign to the variable newNode a reference to it.
    - If head is null
      - then assign newNode to head and return
      - else
        - set current to head
        - while current.next is not null
          - set current to current.next
        - set current.next to newNode and return

2. .insertBefore(value, newVal)

    - set current to linkedList.head
    - loop while current is not null and current.value is not equal to value
      - set previous to current
      - set current to current.next
    - if current is null then return an exception
    - Create a new instance of Node with the given value and assign to the temporary variable newNode a reference to it.
    - set newNode.next to current
    - if current references the same node as linkedList.head
      - set linkedList.head to newNode
    - else
      - set previous.next to newNode

3. .insertAfter(value, newVal)

    - set current to linkedList.head
    - loop while current is not null and current.value is not equal to value
      - set current to current.next
    - if current is null the return an exception
    - Create a new instance of Node with the given value and assign to the temporary variable newNode a reference to it.
    - set newNode.next to current.next
    - set current.next to newNode

## Solution

### Whiteboard

#### append

![append](../../../assests/ll-insertions-append.jpg "append")

#### insertBefore

![insertBefore](../../../assests/ll-insertions-insertBefore.jpg "insertBefore")

#### insertAfter

![insertAfter](../../../assests/ll-insertions-insertAfter.jpg "insertAfter")

### [Code](linked-list.js)
