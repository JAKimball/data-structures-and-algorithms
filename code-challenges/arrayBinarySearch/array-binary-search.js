'use strict';

const binarySearch = (arr, key) => {
  let low = 0;
  let high = arr.length - 1;

  while (low < high) {
    let mid = ((high - low + 1) >> 1) + low;
    if (arr[mid] > key) {
      high = mid-1;
    } else {
      low = mid;
    }
  }

  return (arr[low] === key ? low : -1);
};

module.exports = binarySearch;
