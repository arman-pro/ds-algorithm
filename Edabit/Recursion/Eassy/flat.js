/***
 * Given a nested Array and return a simple flat array
 * @param {Array} arr
 * @return {Array}
 */

function flat(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr.push(...flat(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

//  Test Case
console.log(
  flat([1, 2, 3, [4, [5, [6, [7, "a", ["b", "c"]]], 8]], 9, [10, 11, 12]])
); // output [1, 2, 3, 4, 5, 6, 7, 'a', 'b', 'c', 8, 9, 10, 11, 12]

console.log(flat([])); // []
