const binarySearch = (arr, number, start, end) => {
  console.log(arr, number, start, end);
  if (start > end) {
    return 'not found';
  }
  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === number) {
    return 'found at index: ' + mid;
  }
  if (arr[mid] > number) {
    return binarySearch(arr, number, 0, mid - 1);
  } else {
    return binarySearch(arr, number, mid + 1, end);
  }
};

let array = [12, 35, 75, 23, 1, 45, 64, 24, 56, 8];
array.sort((a, b) => {
  return a - b;
});
let number = 23;
let len = array.length;
let result = binarySearch(array, number, 0, len - 1);
console.log(result);
