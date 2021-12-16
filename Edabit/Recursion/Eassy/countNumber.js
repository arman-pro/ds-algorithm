/**
 * Given a nested array and return total number of array
 * @param {Array} arr
 * @returns {int}
 */

const countNumber = (arr) => {
  let count = 0;
  if (arr.length === 0) return count;
  for (item of arr) {
    if (Array.isArray(item)) {
      count += countNumber(item); // increament with return value time
    } else if (typeof item === "number") {
      count += 1; // increament one time
    }
  }
  return count;
};

// Test Case
console.log(
  countNumber([
    1,
    2,
    3,
    [4, [5, [6, [7, "a", ["b", "c"]]], 8]],
    9,
    [10, 11, 12],
  ])
); // output 12

console.log(countNumber([])); //output 0
console.log(countNumber([[[[[2, 14]]], 2, 3, 4]])); //output 5
console.log(countNumber([["", 17.2, 5, "edabit"]])); //output 2
console.log(countNumber(["Arman Ali"])); //output 0
