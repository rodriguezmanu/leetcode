// 70. Climbing Stairs

// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Note: Given n will be a positive integer.

// Example 1:

// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

function climbStairs(num) {
  // one loop, most performance
  let a = 1;
  let b = 0;
  let temp;

  while (num >= 0) {
    temp = a;
    a += b;
    b = temp;
    num--;
  }

  return b;
}

function climbStairsFino(n) {
  // recursive not performance (45 case failed)
  if (n === 0 || n === 1 || n === 2) return n;
  return climbStairsFino(n - 1) + climbStairsFino(n - 2);
}

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(4)); // 5
console.log(climbStairs(45)); // 1836311903
console.log(climbStairs(5)); // 8
console.log(climbStairs(6)); // 13
