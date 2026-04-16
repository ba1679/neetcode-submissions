/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        if(root === null) {
            return 0
        }
        // 原本自己的點(1) + 比較左右兩邊的深度的節點數
        return 1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right))
    }
}
