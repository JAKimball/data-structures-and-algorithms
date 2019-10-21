'use strict';

const binarySearch = require('../array-binary-search');

const largeWithKey = (size, key, max = 10000) => {
  const result = Array(size);
  result[0] = key;
  for (let i = 1; i < result.length; i++) {
    result[i] = Math.floor(Math.random() * (max + 1));
  }
  return result.sort((a, b) => (a - b));
};

const largeWithoutKey = (size, key, max = 10000) => {
  const result = Array(size);
  let value = 0;
  for (let i = 0; i < result.length; i++) {
    do {
      value = Math.floor(Math.random() * (max + 1));
    } while (value === key);
    result[i] = value;
  }
  return result.sort((a, b) => (a - b));
};

let testArr = [];

describe('Testing binarySearch()', () => {
  test('Should output -1 if the value is not found in the array', () => {
    expect(binarySearch([2, 4, 6, 8], 5)).toEqual(-1);
  });
  test('It should work properly when the input array is empty.', () => {
    expect(binarySearch([], 99)).toEqual(-1);
  });
  test('Should find the matching element if it is the first in the array.', () => {
    expect(binarySearch([99, 1007, 1008, 1009], 99)).toEqual(0);
  });
  test('Should find the matching element if it is the last in the array.', () => {
    expect(binarySearch([12, 13, 14, 15, 16, 99], 99)).toEqual(5);
  });

  for (let i = 4; i <= 20; i++) {
    let size = 2 ** i;
    let key = Math.floor(Math.random() * 10000);

    test(`Test ${size} element array with key.`, () => {
      testArr = largeWithKey(size, key);
      let keyAt = binarySearch(testArr, key);
      expect(testArr[keyAt]).toEqual(key);
    });

    test(`Test ${size} element array without key.`, () => {
      testArr = largeWithoutKey(size, key);
      let keyAt = binarySearch(testArr, key);
      expect(keyAt).toEqual(-1);
    });
  }
});

// describe('Test binarySearch on large arrays.', () => {
//   beforeEach()
// })
