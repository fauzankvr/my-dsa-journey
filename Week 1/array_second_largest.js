function secondLargest(arr) {
  let first = -Infinity;
  let second = -Infinity;
  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }
  return second;
}
console.log(secondLargest([10, 5, 7, 20, 12]));
