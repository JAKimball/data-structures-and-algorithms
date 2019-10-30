'use strict';

const { Queue } = require('../data-structures/stacksAndQueues/stacks-and-queues');

/**
 * AnimalShelter Class
 *
 * Holds only dogs and cats. The shelter operates
 * using a first - in , first - out approach.
 *
 * @class AnimalShelter
 */
class AnimalShelter {
  /**
   *Creates an instance of AnimalShelter.
   * @memberof AnimalShelter
   */
  constructor() {
    this.catQueue = new Queue();
    this.dogQueue = new Queue();
  }

  /**
   * Adds animal to the shelter. animal can be either a
   * Dog or a Cat object.
   *
   * @param {Animal} animal Dog or Cat object to be added
   * @memberof AnimalShelter
   */
  enqueue(animal) {
    if (animal instanceof Cat) {
      this.catQueue.enqueue(animal);
    } else if (animal instanceof Dog) {
      this.dogQueue.enqueue(animal);
    } else {
      throw 'Object must be of class Cat or Dog.';
    }
  }

  /**
   * Returns either a dog or a cat. If pref is not "dog"
   * or "cat", then return null.
   *
   * @param {string} pref
   * @returns Dog or Cat object
   * @memberof AnimalShelter
   */
  dequeue(pref) {
    switch (pref.toLowerCase()) {
    case 'cat':
      return this.catQueue.dequeue();
    case 'dog':
      return this.dogQueue.dequeue();
    default:
      return null;
    }
  }

  /**
   * Returns a boolean indicating if the queue is empty.
   *
   * @returns True if the queue is empty, otherwise false.
   * @memberof AnimalShelter
   */
  isEmpty() {
    return this.catQueue.isEmpty() && this.dogQueue.isEmpty();
  }
}

/**
 * The Animal Class
 *
 * @class Animal
 */
class Animal {
  /**
   *Creates an instance of Animal.
   * @param {*} name
   * @memberof Animal
   */
  constructor(name) {
    this.name = name;
  }
}

/**
 * The Cat Class
 *
 * @class Cat
 * @extends {Animal}
 */
class Cat extends Animal {}

/**
 * The Dog Class
 *
 * @class Dog
 * @extends {Animal}
 */
class Dog extends Animal {}

module.exports = { AnimalShelter, Cat, Dog };
