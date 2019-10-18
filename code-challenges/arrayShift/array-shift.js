'use strict';

const insertShiftArray = (arr, value) => {
  const result = [...Array(arr.length + 1)];
  const midIndex = Math.ceil(arr.length / 2);

  for (let i = 0; i < midIndex; i++) {
    result[i] = arr[i];
  }

  result[midIndex] = value;

  for (let i = midIndex; i < arr.length; i++) {
    result[i+1] = arr[i];
  }

  return result;
};

module.exports = insertShiftArray;
