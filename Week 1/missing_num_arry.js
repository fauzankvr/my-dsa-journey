function findMissing(arr) {
  let totalSum = ((arr.length + 1) * (arr.length + 2)) / 2; 
  let arrSum = arr.reduce((sum, num) => sum + num, 0);
  return totalSum - arrSum;
}
console.log(findMissing([1, 2, 4, 5])); 
