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
