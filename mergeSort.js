function mergeSort(arr) {
  if (arr.length === 1) return arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[0] > arr[i]) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      return mergeSort(arr);
    }
  }

  return [arr.shift()].concat(mergeSort(arr));
}

module.exports = mergeSort;
