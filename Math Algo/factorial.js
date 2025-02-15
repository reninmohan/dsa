//find factorial using iterative method
function factorial(num) {
  if (num <= 1) return 1;
  let result = 1;
  for (let i = num; i >= 1; i--) {
    result *= i;
  }
  return result;
}

console.log(factorial(1));

//factorial using recursive
/*
function recursiveFactorial(num) {
  if (num <= 1) return num;
  return num * factorial(num - 1);
}
*/
