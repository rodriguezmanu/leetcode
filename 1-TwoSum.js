// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

const twoSumLoops = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target === nums[j] + nums[i]) {
        return [i, j];
      }
    }
  }
  console.log('No two sum solution');
};

const twoSumMap = (nums, target) => {
  const map = new Map();
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    const complement = target - element;

    if (map.has(complement)) {
      return [map.get(complement), index];
    }
    map.set(element, index);
  }
  console.log('No two sum solution');
};

const twoSum = (nums, target) => {
  const map = {};
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    const complement = target - element;

    if (map[complement] >= 0) {
      return [map[complement], index];
    }
    map[element] = index;
  }
  console.log('No two sum solution');
};

const a = [2, 7, 11, 15];

console.log(twoSumLoops(a, 18)); // [1, 2]
console.log(twoSumMap(a, 9)); // [0, 1]
console.log(twoSum(a, 13)); // [0, 2]
