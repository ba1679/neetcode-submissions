class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min = prices[0];
        let maxProfit = 0;

        for(let i = 1; i < prices.length; i++) {
            const profit = prices[i] - min;

            maxProfit = Math.max(maxProfit, profit);

            min = Math.min(min, prices[i])
        }

        return maxProfit;
    }
}
