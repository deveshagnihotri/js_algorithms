// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
//
// The overall run time complexity should be O(log (m+n)).

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
	const nums = nums1.concat(nums2);
	nums.sort((a, b) => a - b);
	const len = nums.length;
	if (len % 2 === 0) {
		return (nums[len / 2 - 1] + nums[len / 2]) / 2;
	} else {
		return nums[Math.floor(len / 2)];
	}
};

const nums1 = [1, 3];
const nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2));
