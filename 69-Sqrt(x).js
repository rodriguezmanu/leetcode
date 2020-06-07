// 69. Sqrt(x)

// Implement int sqrt(int x).

// Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

// Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

// Example 1:

// Input: 4
// Output: 2
// Example 2:

// Input: 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since
//              the decimal part is truncated, 2 is returned.

/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = x => {
  if (x === 0) {
    return 0;
  }

  let index = 1;
  let result = 1;
  let counter = 0;

  while (result <= x) {
    result = Math.pow(index, 2);
    index++;
    counter++;
  }
  return counter - 1;
};

console.log(mySqrt(4)); // 2
console.log(mySqrt(8)); // 2
console.log(mySqrt(9)); // 3
console.log(mySqrt(16)); // 4
console.log(mySqrt(0)); // 0
console.log(mySqrt(1)); // 1
