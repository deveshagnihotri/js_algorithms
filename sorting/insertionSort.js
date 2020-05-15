const insertionSort = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
};

let array = [25, 17, 31, 13, 2];
let result = insertionSort(array);
console.log(result);
