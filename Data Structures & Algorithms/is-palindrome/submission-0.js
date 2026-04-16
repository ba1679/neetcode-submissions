class Solution {
    /**
   * Check if a character is alphanumeric
   * @param {char} char
   * @return {boolean}
   */
  isAlphanumeric (char) {
    return (
      (char >= 'a' && char <= 'z') ||
      (char >= 'A' && char <= 'Z') ||
      (char >= '0' && char <= '9')
    )
  }

  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome (s) {
    let newString = '';
    for (let i = 0; i < s.length; i++) {
      if (this.isAlphanumeric(s[i])) {
        newString += s[i].toLowerCase();
      }
    }
    return newString === newString.split('').reverse().join('');
  }
}
