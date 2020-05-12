const removeDuplicate = (a, n) => {
  let unique = [];
  let r = {};
  for (let i = 0; i < n; i++) {
    if (!r.hasOwnProperty(arr[i])) {
      r[a[i]] = 1;
      unique.push(arr[i]);
    }
  }
  return unique;
};

let arr = [2, 4, 8, 6, 2, 3, 5];
//new ES6
// console.log(Array.from(new Set(arr)))

let len = arr.length;
let result = removeDuplicate(arr, len);
console.log(result);
