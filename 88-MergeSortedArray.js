// 88. Merge Sorted Array

// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
  if (n === 0) return nums1;

  n--;
  while (n >= 0) {
    nums1[m] = nums2[n];
    m++;
    n--;
  }

  return nums1.sort((a, b) => a - b);
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]
console.log(merge([1], 1, [], 0)); // [1]
console.log(merge([0], 0, [1], 1)); // [1]
console.log(
  merge(
    [
      -10,
      -10,
      -9,
      -9,
      -9,
      -8,
      -8,
      -7,
      -7,
      -7,
      -6,
      -6,
      -6,
      -6,
      -6,
      -6,
      -6,
      -5,
      -5,
      -5,
      -4,
      -4,
      -4,
      -3,
      -3,
      -2,
      -2,
      -1,
      -1,
      0,
      1,
      1,
      1,
      2,
      2,
      2,
      3,
      3,
      3,
      4,
      5,
      5,
      6,
      6,
      6,
      6,
      7,
      7,
      7,
      7,
      8,
      9,
      9,
      9,
      9,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ],
    55,
    [
      -10,
      -10,
      -9,
      -9,
      -9,
      -9,
      -8,
      -8,
      -8,
      -8,
      -8,
      -7,
      -7,
      -7,
      -7,
      -7,
      -7,
      -7,
      -7,
      -6,
      -6,
      -6,
      -6,
      -5,
      -5,
      -5,
      -5,
      -5,
      -4,
      -4,
      -4,
      -4,
      -4,
      -3,
      -3,
      -3,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -1,
      -1,
      -1,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      3,
      3,
      3,
      3,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      5,
      5,
      5,
      5,
      5,
      5,
      6,
      6,
      6,
      6,
      6,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      8,
      8,
      8,
      8,
      9,
      9,
      9,
      9,
    ],
    99
  )
);