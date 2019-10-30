'use strict';

const { AnimalShelter, Cat, Dog } = require('../fifo-animal-shelter');

describe('Testing AnimalShelter Class', () => {

  test('Can successfully enqueue into a shelter', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue(new Dog('Rex'));
    expect(shelter.dequeue('Dog').name).toEqual('Rex');
    expect(() => shelter.dequeue('Dog')).toThrow();
    expect(shelter.isEmpty()).toEqual(true);
  });

  test('Can successfully enqueue multiple Animals into a shelter', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue(new Dog(1));
    shelter.enqueue(new Dog(2));
    shelter.enqueue(new Cat(1));
    shelter.enqueue(new Cat(2));
    shelter.enqueue(new Dog(3));
    shelter.enqueue(new Cat(3));

    let animal = shelter.dequeue('Cat');
    expect(animal).toBeInstanceOf(Cat);
    expect(animal.name).toEqual(1);

    animal = shelter.dequeue('Cat');
    expect(animal).toBeInstanceOf(Cat);
    expect(animal.name).toEqual(2);

    animal = shelter.dequeue('Dog');
    expect(animal).toBeInstanceOf(Dog);
    expect(animal.name).toEqual(1);

    animal = shelter.dequeue('Dog');
    expect(animal).toBeInstanceOf(Dog);
    expect(animal.name).toEqual(2);

    animal = shelter.dequeue('x');
    expect(animal).toBeNull();

    animal = shelter.dequeue('Cat');
    expect(animal).toBeInstanceOf(Cat);
    expect(animal.name).toEqual(3);

    expect(shelter.isEmpty()).toEqual(false);

    animal = shelter.dequeue('Dog');
    expect(animal).toBeInstanceOf(Dog);
    expect(animal.name).toEqual(3);

    expect(shelter.isEmpty()).toEqual(true);
  });

  test('Can successfully dequeue out of a shelter the expected value', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue(new Dog('Max'));

    let animal = shelter.dequeue('Dog');
    expect(animal).toBeInstanceOf(Dog);
    expect(animal.name).toEqual('Max');
    expect(shelter.isEmpty()).toEqual(true);
  });

  test('Can successfully empty a shelter after multiple de-queues', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue(new Dog(1));
    shelter.enqueue(new Dog(2));
    shelter.enqueue(new Cat(10));

    let animal = shelter.dequeue('Cat');
    expect(animal).toBeInstanceOf(Cat);
    expect(animal.name).toEqual(10);

    animal = shelter.dequeue('Dog');
    expect(animal).toBeInstanceOf(Dog);
    expect(animal.name).toEqual(1);

    animal = shelter.dequeue('Dog');
    expect(animal).toBeInstanceOf(Dog);
    expect(animal.name).toEqual(2);

    expect(shelter.isEmpty()).toEqual(true);
  });

  test('Can successfully instantiate an empty shelter', () => {
    const shelter = new AnimalShelter();
    expect(shelter.isEmpty()).toEqual(true);
  });

  test('Throws exception when attempting to enqueue an object not a Cat or Dog class.', () => {
    const shelter = new AnimalShelter();
    expect(() => shelter.enqueue({ name: 'Molly' })).toThrow('Object must be of class Cat or Dog.');
  });

  test('Throws exception when attempting to dequeue an empty shelter', () => {
    const shelter = new AnimalShelter();
    expect(() => shelter.dequeue('Dog')).toThrow('Attempted to dequeue an empty queue.');
    expect(() => shelter.dequeue('Cat')).toThrow('Attempted to dequeue an empty queue.');
  });

})
;
