'use strict';

const insertShiftArray = require('../array-shift');

describe('Testing insertShiftArray()', () => {
  test('The output should include the given value at the middle of the input array.', () => {
    expect(insertShiftArray([2, 4, 6, 8], 5)).toEqual([2, 4, 5, 6, 8]);
    expect(insertShiftArray([4, 8, 15, 23, 42], 16)).toEqual([4, 8, 15, 16, 23, 42]);
  });
  test('It should work properly when the input array is empty.', () => {
    expect(insertShiftArray([], 99)).toEqual([99]);
  });
});
