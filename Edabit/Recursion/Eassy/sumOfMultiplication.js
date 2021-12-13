/***
 * given a positive integer and a range
 * return the total sum of that number multiplied by every number between 1 and 10.
 * @param {int} num
 * @param {range} range
 * @return {int}
 */

const multiSum = (num, range = 10) => {
  if (num < 0) return -1;
  if (range === 1) return num * range;
  return num * range + multiSum(num, range - 1);
};

// test case

console.log(multiSum(1)); // Expected Output 55
console.log(multiSum(2)); // Expected Output 110
console.log(multiSum(3)); // Expected Output 165
console.log(multiSum(10)); // Expected Output 550
console.log(multiSum(-1)); // Expected Output -1
