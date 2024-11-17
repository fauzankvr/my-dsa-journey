function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 3, 8, 4, 2])); // Expected output: [2, 3, 4, 5, 8]

// [3,5,4,2,8]  ---> [3,4,2,5,8] ---> [3,2,4,5,8] ---> [2,3,4,5,8]
