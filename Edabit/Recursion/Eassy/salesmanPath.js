/**
 * given @var n cities number and calculate the way of paths
 * @param {int} n cities number
 * @return {int} posible paths
 */

const paths = (n) => {
  if (n < 0) return 0;
  if (n === 1) return n;
  return n * paths(n - 1);
};

// test case
console.log(paths(4)); // ➞ 24

console.log(paths(1)); // ➞ 1

console.log(paths(9)); // ➞ 362880
