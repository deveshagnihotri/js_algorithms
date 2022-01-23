//Given an integer array nums, return all the triplets [nums[i], nums[j], nums[
//k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
//
// Notice that the solution set must not contain duplicate triplets.
//
//
// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
//Output: [[-1,-1,2],[-1,0,1]]
// Example 2:
// Input: nums = []
//Output: []
// Example 3:
// Input: nums = [0]
//Output: []
//
//
// Constraints:
//
//
// 0 <= nums.length <= 3000
// -10⁵ <= nums[i] <= 10⁵

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Approach 1: Brute Force (Time Limit Exceeded)
// const threeSum = function(nums) {
// 	// Approach #1: Brute Force [Time Limit Exceeded]
// 	// Time Complexity: O(n^3)
// 	// Space Complexity: O(1)
// 	// Algorithm
// 	// 1. Sort the array
// 	// 2. For each element in the array, find the two elements that sum to -element
// 	// 3. If the two elements exist, add the triplet to the result
// 	// 4. Return the result
//
// 	const result = [];
// 	const sorted = nums.sort((a, b) => a - b);
// 	const len = sorted.length;
// 	for (let i = 0; i < len; i++) {
// 		let left = i + 1;
// 		let right = len - 1;
//
// 		while (left < right) {
// 			const sum = sorted[i] + sorted[left] + sorted[right];
// 			if (sum === 0) {
// 				result.push([sorted[i], sorted[left], sorted[right]]);
// 				left++;
// 				right--;
// 			} else if (sum > 0) {
// 				right--;
// 			} else {
// 				left++;
// 			}
// 		}
// 	}
// 	// remove duplicates
// 	const set = new Set();
// 	for (let i = 0; i < result.length; i++) {
// 		set.add(result[i].join(','));
// 	}
// 	return [...set].map(x => x.split(',').map(Number));
// };

// Approach #2: Two Pointers [Accepted]
const threeSum = function (nums) {
	// Time Complexity: O(n^2)
	// Space Complexity: O(1)
	// Algorithm
	// 1. Sort the array
	// 2. Initialize two pointers i and j
	// 3. For each element in the array, find the two elements that sum to -element
	// 4. If the two elements exist, add the triplet to the result
	// 5. Return the result

	const result = [];
	const sorted = nums.sort((a, b) => a - b);
	const len = sorted.length;

	for (let i = 0; i< len; i++) {
		for (let j = i + 1, k = len - 1; j < k;) {
			const sum = sorted[i] + sorted[j] + sorted[k];
			if (sum === 0) {
				result.push([sorted[i], sorted[j], sorted[k]]);
				j++;
				k--;
				while (j < k && sorted[j] === sorted[j - 1]) {
					j++;
				}
				while (j < k && sorted[k] === sorted[k + 1]) {
					k--;
				}
			} else if (sum > 0) {
				k--;
			} else {
				j++;
			}
		}
	}
	// remove duplicates
	const set = new Set();
	for (let i = 0; i < result.length; i++) {
		set.add(result[i].join(','));
	}
	return [...set].map(x => x.split(',').map(Number));
}

const result = threeSum([-1,0,1,2,-1,-4]);
console.log(result);
