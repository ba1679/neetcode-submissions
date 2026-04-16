class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hasSeen = new Set();
        for(let i = 0; i < nums.length; i++) {
            if(hasSeen.has(nums[i])) {
                return true
            }else {
                hasSeen.add(nums[i])
            }
        }
        return false;
    }
}
