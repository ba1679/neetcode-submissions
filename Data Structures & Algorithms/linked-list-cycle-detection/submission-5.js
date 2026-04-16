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
     * @return {boolean}
     */
    hasCycle(head) {
        const hashSet = new Set();

        let currentNode = head;

        while(currentNode !== null) {
            if(hashSet.has(currentNode)){
                return true;
            }
            hashSet.add(currentNode);
            currentNode = currentNode.next;
        }
        return false
    }
}
