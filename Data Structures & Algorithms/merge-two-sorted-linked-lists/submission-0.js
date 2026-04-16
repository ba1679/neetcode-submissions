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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const dummy = { val: 0, next: null };
        let node = dummy;

        while (list1 && list2) {
            if (list1.val < list2.val) {
                node.next = list1; //節點後面改接 list1
                list1 = list1.next; //list1 改成 list1 的下一個值
            } else {
                node.next = list2; //節點後面改接 list2
                list2 = list2.next; //list2 改成 list2 的下一個值
            }
            node = node.next; //把節點改成目前結點的下一個數值 (ex: 如果是 list1.val < list2.val 的情況，node = list1 的首值)
        }

        node.next = list1 || list2;

        return dummy.next;
    }
}
