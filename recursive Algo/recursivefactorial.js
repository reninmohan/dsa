function recursivefactorial(num) {
  if (num === 0) return 1;
  return num * recursivefactorial(num - 1);
}

console.log(recursivefactorial(0)); // O (n)
console.log(recursivefactorial(1));
console.log(recursivefactorial(5));
console.log(recursivefactorial(6));
