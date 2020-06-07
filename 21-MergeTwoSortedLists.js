// 21. Merge Two Sorted Lists

// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const mergeTwoLists = function(l1, l2) {
  const l3 = new ListNode();
  let p = l3;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      p.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      p.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    p = p.next;
  }
  p.next = l1 || l2;
  return l3.next;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4])); //  [1,1,2,3,4,4]
