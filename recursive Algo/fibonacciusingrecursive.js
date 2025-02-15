function recursivefibonacci(num) {
  if (num < 2) {
    return num;
  }
  return recursivefibonacci(num - 1) + recursivefibonacci(num - 2);
}

console.log(recursivefibonacci(0));
console.log(recursivefibonacci(1));
console.log(recursivefibonacci(7));
