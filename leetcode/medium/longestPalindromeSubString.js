//Given a string s, return the longest palindromic substring in s.
//
//
// Example 1:
//
//
//Input: s = "babad"
//Output: "bab"
//Explanation: "aba" is also a valid answer.
//
//
// Example 2:
//
//
//Input: s = "cbbd"
//Output: "bb"
//
//
//
// Constraints:
//
//
// 1 <= s.length <= 1000
// s consist of only digits and English letters.
//
// Related Topics String Dynamic Programming

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @return {number}
 */

const longestPalindrome = function(s) {
	const len = s.length;
	if (len < 2) return s;

	let max = 0;
	let start = 0;
	let end = len - 1;

	for (let i =0; i < len; i++) {
		let left = i;
		let right = i;
		
		while (left >= 0 && right < len && s[left] === s[right]) {
			left--;
			right++;
		}
		left++;
		right--;
		if (right - left + 1 > max) {
			max = right - left + 1;
			start = left;
			end = right;
		}

		left = i;
		right = i + 1;
		while (left >= 0 && right < len && s[left] === s[right]) {
			left--;
			right++;
		}
		left++;
		right--;
		if (right - left + 1 > max) {
			max = right - left + 1;
			start = left;
			end = right;
		}
	}
	return s.substring(start, end + 1);
};

const result = longestPalindrome("babad");
console.log(result);
