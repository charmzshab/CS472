"use strict";

// a) Using Function Expression
const computeSumOfSquares = function (numbers) {
  return numbers.map((num) => num * num).reduce((acc, curr) => acc + curr, 0);
};

console.log("Sum of squares:", computeSumOfSquares([1, 2, 3])); // Output: 14

// b) Using Arrow Function
const printOddNumbersOnly = (numbers) => {
  const oddNumbers = numbers.filter((num) => num % 2 !== 0);
  console.log("Odd numbers:", oddNumbers.join(", "));
};

printOddNumbersOnly([1, 2, 3, 4, 5]); // Output: 1, 3, 5

// c) Using Regular Function
function printFibo(n, a, b) {
  const fibo = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      fibo.push(a);
    } else if (i === 1) {
      fibo.push(b);
    } else {
      fibo.push(fibo[i - 1] + fibo[i - 2]);
    }
  }
  console.log("Fibonacci sequence:", fibo.join(", "));
}

printFibo(6, 0, 1); // Output: 0, 1, 1, 2, 3, 5
