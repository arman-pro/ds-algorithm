/**
 * Linear Search Algorithm
 * Create a function that takes two @var arr & @var item
 * return @var item index from @var arr
 * @param {Array|String} arr
 * @param {int|string} item
 * @returns {int} index of item
 */
function linearSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([1, 5, 3, 2, 4, 6], 6)); // 5
console.log(linearSearch([15, 63, 2, -1], 8)); // -1
console.log(linearSearch("Arman", "n")); // 4
console.log(linearSearch([], 4)); // -1
