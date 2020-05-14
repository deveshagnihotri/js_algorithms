const selectionSort = (arr) => {
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  return arr;
};

let array = [12, 43, 5, 63, 23, 8, 35, 22];
let result = selectionSort(array);
console.log(result);
