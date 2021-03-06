// 20. Valid Parentheses

// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const stack = [];
  const leftMap = {
    '{': 1,
    '[': 2,
    '(': 3,
  };
  const rightMap = {
    '}': 1,
    ']': 2,
    ')': 3,
  };

  for (let index = 0; index < s.length; index++) {
    const element = s[index];

    if (leftMap[element]) {
      stack.push(element);
    } else {
      const pop = stack.pop(element);
      if (rightMap[element] !== leftMap[pop]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isValid('[]')); // true
console.log(isValid('[()]')); // true
console.log(isValid('[({})]')); // true
console.log(isValid('[](){}')); // true
console.log(isValid('([)]')); // false
console.log(isValid('(]')); // false
