class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
          let result = -1;
    for(let i = 0; i < nums.length; i++) {
      const number = nums[i]
      if(number === target) {
        result = i
      }
    }
    return result
    }
}
