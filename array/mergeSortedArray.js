var merge = function(nums1, m, nums2, n) {
  while (n) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[m + n - 1] = nums1[--m]; 
    } else {
      nums1[m + n - 1] = nums2[--n];   
    }
  }
  return nums1;
};

// Do not return anything, modify nums1 in-place instead.
const result = merge([1,2,3,0,0,0], 3, [2, 5, 6], 3);

console.log(result)