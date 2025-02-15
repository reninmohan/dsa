function selectionsort(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < min) {
      let temp = min;
      min = arr[i];
      arr[i] = temp;
    };. 
  }
}

const arr = [-4, 0, -2, 2, 4, 1];
selectionsort(arr);
console.log(selectionsort(arr));
