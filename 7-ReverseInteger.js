// Reverse Integer

// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
  let rev = 0;

  while (x !== 0) {
    // pop operation:
    const pop = x % 10;
    x = (x / 10) | 0;

    // push operation:
    rev = rev * 10 + pop;
    if (rev > 0x7fffffff || rev < -0x7fffffff) {
      return 0;
    }
  }

  return rev;
};

console.log(reverse(1534236469)); // 0
console.log(reverse(-1534236469)); // 0
console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
