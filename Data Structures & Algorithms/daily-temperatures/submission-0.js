class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = new Array(temperatures.length).fill(0);
        const stack = []; // temperature, index

        for(let i = 0; i < temperatures.length; i++){
            const currentTemp = temperatures[i];
            while(stack.length > 0 && currentTemp > stack.at(-1)[0]) {
                const [_stackT, stackIndex] = stack.pop();
                res[stackIndex] = i - stackIndex;
            }

            stack.push([currentTemp, i])
        }
        return res;
    }
}
