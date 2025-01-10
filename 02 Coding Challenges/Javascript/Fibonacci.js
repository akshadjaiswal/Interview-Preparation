function fibonacci(n) {
  let fib = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      fib.push(0);
    } else if (i === 1) {
      fib.push(1);
    } else {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
  }
  return fib;
}
console.log(fibonacci(10));
