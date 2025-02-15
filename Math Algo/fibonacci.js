function fibonacci(num) {
  if (num <= 0) return [];
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  let result = [0, 1];
  for (let i = 2; i < num; i++) {
    result.push(result[i - 2] + result[i - 1]);
  }
  return result;
}

console.log(fibonacci(7));

//0, 1, 1, 2, 3, 5, 8, 13
