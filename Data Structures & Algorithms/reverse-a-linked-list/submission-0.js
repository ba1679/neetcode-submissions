/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
     reverseList(head) {
    let prev = null;
    let current = head;

    while (current) {
      const temp = current.next;
      current.next = prev; //把目前的下一個移去前一格
      prev = current; //把前一個變成目前的
      current = temp; // 把目前的變成原本的下一個 (eg: A -> B current 從 A -> B)
    }
    return prev;
  }
}
