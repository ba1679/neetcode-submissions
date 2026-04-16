class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const firstString = s.split('').sort().join();
        const secondString = t.split('').sort().join();

        return firstString === secondString;
    }
}
