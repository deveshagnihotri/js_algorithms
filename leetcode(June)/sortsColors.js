var sortColors = function (nums) {
  return nums.sort((a, b) => a - b);
};

let input = [2, 0, 2, 1, 1, 0];
let result = sortColors(input);
console.log(result);
