function bubbleSort(arr) {
  let temp = 0;
  let swap; 
  do {
    swap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      
      if (arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swap = true;
      }
    }
  } while (swap); 
}

let arr = [2, 1, 3, 4, 1, -1];
bubbleSort(arr);
console.log(arr);
