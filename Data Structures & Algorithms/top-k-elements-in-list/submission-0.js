class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj = {};
        for(let i = 0; i < nums.length ; i++) {
            const num = nums[i];
            if(!obj[num]) {
                obj[num] = 1;
            }else {
                obj[num] += 1;
            }
        }
        // 把出現的數量與數字本身的位置對調
        const arr = Object.entries(obj).map(([num, freq]) => [freq, num])
        // 數字排序
        arr.sort((a,b) => b[0] - a[0])

        return arr.slice(0, k).map((pair) => pair[1])

    }
}
