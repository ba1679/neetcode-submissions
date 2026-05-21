class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;

        let maxAmount = 0;

        while(left < right) {
            const width = right - left;
            const height = Math.min(heights[right], heights[left]);

            maxAmount = Math.max(maxAmount, width * height);

            if(heights[right] < heights[left]) {
                right--
            }else {
                left++;
            }
        }
        return maxAmount;
    }
}
