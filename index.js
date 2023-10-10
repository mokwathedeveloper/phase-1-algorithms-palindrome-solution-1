function isPalindrome(word) {
  // Convert the word to lowercase to make the comparison case-insensitive
  const lowerWord = word.toLowerCase();

  // Initialize pointers for the start and end of the word
  let start = 0;
  let end = lowerWord.length - 1;

  // Continue checking characters towards the center
  while (start < end) {
    // If characters at the pointers don't match, the word is not a palindrome
    if (lowerWord[start] !== lowerWord[end]) {
      return false;
    }

    // Move the pointers towards the center
    start++;
    end--;
  }

  // If the loop completes without returning false, the word is a palindrome
  return true;
}

/* 
  Pseudocode:
  1. Convert the input word to lowercase.
  2. Initialize two pointers, one at the start and the other at the end of the word.
  3. While the start pointer is less than the end pointer:
    a. If the characters at the start and end pointers do not match, return false (not a palindrome).
    b. Move the start pointer one step forward.
    c. Move the end pointer one step backward.
  4. If the loop completes without returning false, the word is a palindrome. Return true.

  Explanation:
  - The function compares characters from the start and end of the word towards the center.
  - It ignores case during the comparison (converts the word to lowercase).
  - If any pair of characters does not match, it immediately returns false.
  - If the loop completes without returning false, the word is a palindrome, and the function returns true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
