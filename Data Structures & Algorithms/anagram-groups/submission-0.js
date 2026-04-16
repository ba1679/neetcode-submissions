class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};
        for (let i = 0; i< strs.length ; i++) {
            const string = strs[i].split('').sort();
            if(!res[string]) {
                res[string] = []
            }
            res[string].push(strs[i])
        }
        return Object.values(res)
    }
}
