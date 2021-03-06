// Palindrome Number

// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Example 1:

// Input: 121
// Output: true
// Example 2:

// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Follow up:

// Could you solve it without converting the integer to a string?
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let lastDigit;
  let result = 0;
  const original = x;

  while (x > 0) {
    lastDigit = x % 10;
    result = result * 10 + lastDigit;
    x = (x / 10) | 0;
  }
  return result === original;
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
console.log(isPalindrome(0)); // true
