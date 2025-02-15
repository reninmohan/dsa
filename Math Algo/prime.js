function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(4));

///More optimized solution will be . In this solution big O of the solution will be O(sqrt(n)) instead of O(n).

function isPrime(num) {
  if (num <= 1) return false; // 1 is not prime no.
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
