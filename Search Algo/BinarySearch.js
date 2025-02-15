function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  //this
  if (!arr.length) return -1;

  if (start > end) {
    console.log("Not Found");
    return -1;
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    console.log(`${target} element found at index: ${mid}`);
    return mid;
  }

  if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, end);
  }

  if (arr[mid] > target) {
    return binarySearch(arr, target, start, mid - 1);
  }
}

let arr = [-5, 2, 4, 6, 10];

console.log(binarySearch(arr, 2)); //Big O -> O(log n)
