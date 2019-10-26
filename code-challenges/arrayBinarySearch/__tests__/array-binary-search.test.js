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

  const size = 1000000;
  const iterations = 1000000;
  let key = Math.floor(Math.random() * 10000);
  const testArrWithKey = largeWithKey(size, key);
  const testArrWithoutKey = largeWithoutKey(size, key);
  let keyAt = 0;

  test(`Test ${size} element array containing key. ${iterations} iterations.`, () => {
    for (let i = 0; i < iterations; i++) {
      keyAt = binarySearch(testArrWithKey, key);
    }
    expect(testArrWithKey[keyAt]).toEqual(key);
  });

  test(`Test ${size} element array not containing key. ${iterations} iterations.`, () => {
    for (let i = 0; i < iterations; i++) {
      keyAt = binarySearch(testArrWithoutKey, key);
    }
    expect(keyAt).toEqual(-1);
  });
});
