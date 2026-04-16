class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
      const indexMap = new Map();

    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];
      if (indexMap.has(diff)) {
        return [indexMap.get(diff), i]
      }
      indexMap.set(nums[i], i)
    }
    return []
    }
}
