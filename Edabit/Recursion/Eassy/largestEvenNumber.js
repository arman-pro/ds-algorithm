/***
 * Given a array and return the largest even number
 * @param {Array} arr
 * @return {int}
 */

const largestEven = (arr, num = -1) => {
  if (arr.length === 0) return num;
  if (arr[0] % 2 === 0 && num < arr[0]) num = arr[0];
  return largestEven(arr.slice(1), num);
};

// Test Case
console.log(largestEven([3, 7, 2, 1, 7, 9, 10, 13])); // output 10
