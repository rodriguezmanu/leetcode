// 119. Pascal's Triangle II

// Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

// Note that the row index starts from 0.

// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 3
// Output: [1,3,3,1]

const getRow = function(numRows) {
  const matrix = [];

  for (let index = 0; index < numRows + 1; index++) {
    matrix.push(Array(index + 1).fill(1));
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length - 1; j++) {
      matrix[i][j] = matrix[i - 1][j - 1] + matrix[i - 1][j];
    }
  }
  return matrix[numRows];
};

console.log(getRow(3)); //  [1,3,3,1],
