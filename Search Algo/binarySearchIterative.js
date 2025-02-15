function itervateBinarySearch(
  arr,
  target,
  leftIndex = 0,
  rightIndex = arr.length - 1
) {
  if (!arr.length) return -1;
  while (leftIndex <= rightIndex) {
    const mid = Math.floor((leftIndex + rightIndex) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (target < arr[mid]) {
      rightIndex = mid - 1;
    } else {
      leftIndex = mid + 1;
    }
  }
  return -1;
}

const arr = [-1, 3, 5, 6, 8, 10];
console.log(itervateBinarySearch(arr, 10));
