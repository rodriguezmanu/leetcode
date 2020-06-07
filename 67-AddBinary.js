// 67. Add Binary

// Given two binary strings, return their sum (also a binary string).

// The input strings are both non-empty and contains only characters 1 or 0.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

// Constraints:

// Each string consists only of '0' or '1' characters.
// 1 <= a.length, b.length <= 10^4
// Each string is either "0" or doesn't contain any leading zero.

const addBinary = (a, b) => {
  if ((a.includes('1') || a.includes('0')) && (b.includes('1') || b.includes('0'))) {
    const c = BigInt(`0b${a}`);
    const d = BigInt(`0b${b}`);
    const sum = BigInt(c) + BigInt(d);
    const result = sum.toString(2);

    return result.toString();
  }
};

console.log(addBinary('0', '0')); // 100
console.log(addBinary('1010', '1011')); // 10101
console.log(
  addBinary(
    '10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101',
    '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011'
  )
); // "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"
