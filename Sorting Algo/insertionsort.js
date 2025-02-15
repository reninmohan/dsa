function insertationSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // we assume first element which is arr[0]  is already sorted so that why we start iteration from 1
    let key = arr[i]; // to save the current element in separate
    let j = i - 1; // This is because we know the sorted element will come left to this
    while (j >= 0 && arr[j] > key) {
      // we will use loop because there can be more than 1 element in sorted end. j>= 0 to ensure will iterate till first element of sorted end and also check the key will more than arr[j]
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}

const arr = [-4, 0, -2, 2, 4, 1];
insertationSort(arr);
console.log(arr); // Big O -> O(n^2)
