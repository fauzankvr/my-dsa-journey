function quickSort(arr) {
  if (arr.length < 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let pivot = arr[mid];
  let left = [];
  let rigth = [];
  for (let i = 0; i < arr.length; i++) {
    if (i == mid) {
      continue;
    }
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      rigth.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(rigth)];
}

console.log(quickSort([7, 2, 3, 3, 5, 21, 9, 0]));
