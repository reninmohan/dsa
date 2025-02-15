function bubblesort(arr) {
  let swapped;
  let n = arr.length;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      // here n -1 because we don't want to go till last element
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    n--; // decrease because last element is already sorted
  } while (swapped);
  return arr;
}

const arr = [-4, 0, -2, 2, 4, 1];
bubblesort(arr);
console.log(arr);
