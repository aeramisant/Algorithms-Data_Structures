const recursionInAction = (n) => {
  if (n < 1) {
    console.log('EXIT>>>>>', n);
    return n;
  }
  console.log('RECURSION>>>>>', n);
  return recursionInAction(n - 1);
};
// recursionInAction(100);

const factorialRecursion = (num, total = 1) => {
  if (num < 1 || typeof num !== 'number' || num % 1 !== 0) {
    return total;
  }
  let result = num * total;
  console.log(`Factorial of ${num}: ${result}`);
  return factorialRecursion(num - 1, result);
};
// factorialRecursion(10);
const fibonacciRecursion = (n) => {
  if (n <= 1) {
    return n;
  }
  return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
};
// console.log(fibonacciRecursion(10));
