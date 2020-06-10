var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (target <= nums[i]) {
      console.log(nums[i]);
      return i;
    }
  }
  return nums.length;
};

let nums = [1, 3, 5, 6];
let target = 5;
let result = searchInsert(nums, target);
console.log(result);
