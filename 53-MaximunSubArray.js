// 53. Maximum Subarray

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

// Kadane’s Algorithm maximum subarray problem
const maxSubArray = nums => {
  let max = -Infinity;
  let curr = 0;

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    curr = Math.max(element, curr + element);
    max = Math.max(curr, max);
  }

  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6;
