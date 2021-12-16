/***
 * Given two number and return great common divisor of these number
 * @param {int} a
 * @param {int} b
 * @returns {int}
 */

const gcd = (a, b) => {
  if (a < b) {
    var t = a;
    a = b;
    b = a;
  }
  return a % b === 0 ? b : gcd(a, a % b);
};

// Test Case
console.log(gcd(49, 14)); // output: 7
console.log(gcd(280, 64)); // output: 8
console.log(gcd(64, 52)); // output: 4
