//Given a read only array of n + 1 integers between 1 and n, find one number that repeats in linear time using less than O(n) space and traversing the stream sequentially O(1) times.

const findDuplicate = (arr) => {
  let result = {};

  for (let ele in arr) {
    if (result[arr[ele]]) {
      result[arr[ele]] += 1;
    } else {
      result[arr[ele]] = 1;
    }
  }

  for (let i in result) {
    if (result[i] > 1) {
      console.log(i);
    }
  }
};

let array = [2, 4, 34, 64, 34, 2, 56];

findDuplicate(array);
