class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
         const indexMap = {};
    for (let i = 0; i < nums.length; i++) {
      indexMap[nums[i]] = i;
    }

    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];

      if (indexMap[diff] && indexMap[diff] !== i) {
        return [indexMap[diff], i]
      }
    }
    return []
    }
}
