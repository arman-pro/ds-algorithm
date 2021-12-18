/**
 * Given a string check that the string is a palindrom or not
 * @param {String} str
 * @return {Boolean}
 */

const isPalindrom = (str) => {
  if (str === "") return true;
  if (str[0] === str.slice(-1)) return isPalindrom(str.slice(1, -1));
  else return false;
};

// Test Case
console.log(isPalindrom("madam")); // Output: True
console.log(isPalindrom("abcba")); // Output: True
console.log(isPalindrom("adieu")); // Output: False
