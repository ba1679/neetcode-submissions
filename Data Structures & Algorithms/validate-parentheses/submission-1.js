class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const bracketToClose = {
        ")": "(",
        "]": "[",
        "}": "{"
        };

        for (let i = 0; i <= s.length -1; i++) {
            const symbol = s[i];
            if (!bracketToClose[symbol]) {
                stack.push(symbol)
            } else if (stack.length > 0 && stack.at(-1) === bracketToClose[symbol]) {
                stack.pop()
            } else {
                return false
            }
        }

        return stack.length === 0;
    }
}
