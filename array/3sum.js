// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

var threeSum = function(nums) {
  const result = [];
  const resultSum = [];
  nums.forEach((x, i) => {
    nums.forEach((y, j) => {
      nums.forEach((z, k) => {
        if (i !== j && i !== k && j !== k && x + y + z === 0) {
          resultSum.push( x + y + z);
          // console.log(x+y+z)
          resultSum.filter((sum, i) => {
            console.log(sum, 'sum')
            if (sum !== x + y + z) {
              result.push([x, y, z]);
            }
          })
        }
      })
    })
  })
  return result;
};

const nums = [-1,0,1,2,-1,-4];

const result = threeSum(nums);
console.log(result)

// [[-1,-1,2],[-1,0,1]]