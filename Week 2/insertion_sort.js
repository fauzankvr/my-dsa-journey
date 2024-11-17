let arr = [3, 2, 5, 6, 2, 1];

for (let i = 1; i < arr.length; i++) {
  let curr = arr[i];
  let j = i - 1;
  while (j >= 0 && arr[j] > curr) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = curr;
}

// i 2 j 3 true j =-1 [3,3....] [2,3....]  [2,3,5,6  ] [2,3,5,6,2]=> [2,3,5,6,6]=> [2,3,5,5,6] [2,3,3,5,6] [2,2,3,5,6]

console.log(arr);
