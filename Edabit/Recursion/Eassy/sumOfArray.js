/***
 * get a array or nested array and return all numbers total sum
 * @param {Array} arr
 * @param {int} total =0
 * @return {int}
 */

const sumOfArray = (arr, total = 0) => {
  if (arr.length === 0) return total;
  if (typeof arr[0] === "number") {
    total += arr[0];
    return sumOfArray(arr.slice(1), total);
  } else {
    return sumOfArray([...arr[0], ...arr.slice(1)], total);
  }
};

console.log(sumOfArray([1, 2, 3])); // 6
console.log(sumOfArray([1, 2, 3, [1, 2, [8, 1]], 3])); // 21
console.log(sumOfArray([1, [[[1]], 3], 3])); // 8
