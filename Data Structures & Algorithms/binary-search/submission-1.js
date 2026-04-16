class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
         for (let i = 0; i < nums.length; i++) {
      const number = nums[i];
      if (number === target) {
        return i;
      }
    }
    return -1;
    }
}
