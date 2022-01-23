/***You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
	Find two lines that together with the x-axis form a container, such that the container contains the most water.
	Return the maximum amount of water a container can store.
	Notice that you may not slant the container.  **/


/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
	
	let max = 0;
	let left = 0;
	let right = height.length - 1;
	
	// algorithm:
	// while left < right
	// 	calculate the area
	// 	if area > max, update max
	// 	if height[left] < height[right], left++
	// 	else right--
	
	while (left < right) {
		const area = Math.min(height[left], height[right]) * (right - left);
		if (area > max) {
			max = area;
		} else if (height[left] < height[right]) {
			left++;
		} else {
			right--;
		}
	}
	
	return max;
};

const test = [1,8,6,2,5,4,8,3,7];
const result = maxArea(test);

console.log(result);
