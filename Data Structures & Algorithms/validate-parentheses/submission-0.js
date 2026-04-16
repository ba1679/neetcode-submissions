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

    for (let i = 0; i < s.length; i++) {
      const symbol = s[i];
      if (bracketToClose[symbol]) {
        if (
          stack.length > 0 &&
          stack[stack.length - 1] === bracketToClose[symbol]
        ) {
          stack.pop();
        } else {
          return false;
        }
      } else {
        stack.push(symbol);
      }
    }
    return stack.length === 0;
    }
}
