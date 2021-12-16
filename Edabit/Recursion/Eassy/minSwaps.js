/***
 * Given to same length binary string, return the swaps numbers of both var
 * @param {string} strOne
 * @param {string} strTwo
 * @returns {int}
 */

const swapsMin = (strOne, strTwo) => {
  if (strOne === "") return 0;
  return strOne[0] !== strTwo[0]
    ? 0.5 + swapsMin(strOne.slice(1), strTwo.slice(1))
    : swapsMin(strOne.slice(1), strTwo.slice(1));
};

// Test Case
console.log(swapsMin("1100", "1001")); // output: 1
console.log(swapsMin("11111000001100", "10110010100110")); // output: 3
