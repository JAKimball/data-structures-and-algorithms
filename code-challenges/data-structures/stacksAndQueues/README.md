# Stacks and Queues

This is a JavaScript implementation of stack and queue data structures.

## API
<!-- Description of each method publicly available to your Stack and Queue-->

This implements the following objects and methods:

### Node

Used internally by the Stack and Queue objects to form linked lists to implement the stack and queue behaviors.

### Stack

Class that implements a stack.  It has the following methods.

* `push(value)` - Takes any value as an argument and adds a new node with that value to the top of the stack.
* `pop()` - Removes the node from the top of the stack, and returns the node’s value.
* `peek()` - Returns the value of the node located on top of the stack, without removing it from the stack.
* `isEmpty()` - Returns a boolean indicating if the stack is empty.

### Queue

Class that implements a queue.  It has the following methods.

* `enqueue(value)` - Takes any value as an argument and adds a new node with that value to the back of the queue.
* `dequeue()` - Removes the node from the front of the queue, and returns the node’s value.
* `peek()` - Returns the value of the node in the front of the queue without removing it.
* `isEmpty()` - Returns a boolean indicating if the queue is empty.

## [Code](stacks-and-queues.js)

-----------

