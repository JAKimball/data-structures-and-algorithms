'use strict';

const { Stack } = require('../data-structures/stacksAndQueues/stacks-and-queues');

/**
 * Takes a string and returns a boolean representing whether or not
 * the brackets in the string are balanced.
 *
 * @param {string} input
 * @returns True if and only if the brackets in the string are balanced
 */
const multiBracketValidation = (input) => {
  const OPENERS = new Set(['(', '[', '{']);
  const CLOSER_MATCHES = { ')': '(', ']': '[', '}': '{' };
  const stack = new Stack();

  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    if (OPENERS.has(char)) {
      stack.push(char);
    } else {

      // if we have a closer, what should the opener have been?
      let OpenerForCloser = CLOSER_MATCHES[char];
      if (OpenerForCloser) {
        if (stack.isEmpty() || (OpenerForCloser !== stack.pop())) {
          // If the stack is empty already or the corresponding opener
          // does not match, the input string is not properly balanced!
          return false;
        }
      }
    }
  }
  // If we get this far, the input string is balanced
  // if, and only if, the stack is empty!
  return stack.isEmpty();
};

module.exports = multiBracketValidation;
