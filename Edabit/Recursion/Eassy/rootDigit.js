/**
 * Given a number, sum of all number digits until less then 10 and return the single number
 * @param {int} n
 * @return {int}
 */

const rootDigit = (n) => {
  if (n < 10) return n;
  const sum = (n) => (n === "" ? 0 : +n[0] + sum(n.slice(1)));
  return rootDigit(sum(n.toString()));
};

// Test Case
console.log(rootDigit(123)); // Output: 6
console.log(rootDigit(999888777)); // Output : 9
