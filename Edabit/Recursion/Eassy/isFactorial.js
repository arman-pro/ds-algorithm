/***
 * Given a positive integer and check the number is a factorial of int
 * @param {int} num
 * @retrun {int}
 */

const isFactorial = (num, total = 1, i = 1) => {
  if (total === num) return true;
  if (total > num) return false;
  return isFactorial(num, total * i, (i += 1));
};

console.log(isFactorial(27)); // false
console.log(isFactorial(24)); // true
