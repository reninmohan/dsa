//Better approach Big O is O(log n)

function isPowerOfTwoNEw(num) {
  if (num <= 0) return false;

  while (num > 1) {
    if (num % 2 !== 0) return false;
    num /= 2;
  }
  return true;
}

console.log(isPowerOfTwoNEw(1));
console.log(isPowerOfTwoNEw(2));
console.log(isPowerOfTwoNEw(3));
