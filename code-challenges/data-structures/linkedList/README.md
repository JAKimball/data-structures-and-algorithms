# k-th value from the end of a linked list

## Challenge

Write a method for the Linked List class which takes a number, k, as a parameter, return the node’s value that is k from the end of the linked list.

## Solution

## Approach & Efficiency

### Overall Approach

* Write the following helper methods to perform the low level list traversals then use them to build our method:
  * .getLength() - Return the current count of nodes in the linked list.
  * .getNthNode(n) - Return the node at the nth position of the linked list, or throw an exception if there is none.

### .kthFromEnd(k)

* Using these low-level helper methods, write the .kthFromEnd(k) method as follows:
  * Assign to the length variable the length of the list as determined from the .getLength() method.
  * Determine that k is valid for the length of the list and throw an exception if not:
    * Valid values for k: 0 <= k < length
  * Assign to a temporary variable (foundNode) the node reference returned from the .getNthNode(length - k) method.
  * return the value of foundNode.value.

### .getLength() Pseudo-code

* let current = head
* let length = 0
* Loop while current is not null
  * add 1 to length
  * current = current.next
* return length

### .getNthNode(n) Pseudo-code

* let current = head
* let length = 0
* Loop while current is not null
  * add 1 to length
  * if length = n then return current
  * current = current.next
* if we finished the while loop before n was reached, throw an exception!

### Whiteboard

Working together on whiteboard with David Zheng.

#### Problem Domain and Visual

![Problem Domain and Visual](../../../assests/ll-kth-from-end-pd-visual.jpg "Problem Domain and Visual")

#### High Level Pseudo-code

![High Level Pseudo-code](../../../assests/ll-kth-from-end-high-level-pseudo.jpg "High Level Pseudo-code")

#### .getLength() Pseudo-code

![.getLength() Pseudo-code](../../../assests/ll-kth-from-end-pseudo-getLength.jpg ".getLength() Pseudo-code")

#### .getNthNode() Pseudo-code

![.getNthNode() Pseudo-code](../../../assests/ll-kth-from-end-pseudo-getNthNode.jpg ".getNthNode() Pseudo-code")

### [Code](linked-list.js)

# Linked List Insertions

## Challenge

Add to our LinkedList class the following methods:

1. .append(value) - Adds a new node with the given value to the end of the list.

2. .insertBefore(value, newVal) - Adds a new node with the given newValue immediately before the first value node.

3. .insertAfter(value, newVal) - Adds a new node with the given value immediately after the first value node.

## Approach & Efficiency

1. .append(value)

    * Create the new instance of Node with the given value and assign to the variable newNode a reference to it.
    * If head is null
      * then assign newNode to head and return
      * else
        * set current to head
        * while current.next is not null
          * set current to current.next
        * set current.next to newNode and return

2. .insertBefore(value, newVal)

    * set current to linkedList.head
    * loop while current is not null and current.value is not equal to value
      * set previous to current
      * set current to current.next
    * if current is null then return an exception
    * Create a new instance of Node with the given value and assign to the temporary variable newNode a reference to it.
    * set newNode.next to current
    * if current references the same node as linkedList.head
      * set linkedList.head to newNode
    * else
      * set previous.next to newNode

3. .insertAfter(value, newVal)

    * set current to linkedList.head
    * loop while current is not null and current.value is not equal to value
      * set current to current.next
    * if current is null the return an exception
    * Create a new instance of Node with the given value and assign to the temporary variable newNode a reference to it.
    * set newNode.next to current.next
    * set current.next to newNode

## Solution

### Whiteboard

Working together on whiteboard with David Zheng.

#### append

![append](../../../assests/ll-insertions-append.jpg "append")

#### insertBefore

![insertBefore](../../../assests/ll-insertions-insertBefore.jpg "insertBefore")

#### insertAfter

![insertAfter](../../../assests/ll-insertions-insertAfter.jpg "insertAfter")

### [Code](linked-list.js)
