// 118. Pascal's Triangle

// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

const generate = function(numRows) {
  const matrix = [];

  for (let index = 0; index < numRows; index++) {
    matrix.push(Array(index + 1).fill(1));
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length - 1; j++) {
      matrix[i][j] = matrix[i - 1][j - 1] + matrix[i - 1][j];
    }
  }
  return matrix;
};

console.log(generate(5)); //
// // [
// //     [1],
// //    [1,1],
// //   [1,2,1],
// //  [1,3,3,1],
// // [1,4,6,4,1]
// // ]
