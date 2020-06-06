var reconstructQueue = function (people) {
  people.sort((a, b) => {
    if (a[0] !== b[0]) return b[0] - a[0];
    else if (a[1] !== b[1]) return a[1] - b[1];
  });
  let result = [];

  for (let person of people) {
    result.splice(person[1], 0, person);
  }
  return result;
};

let arr = [
  [9, 0],
  [7, 0],
  [1, 9],
  [3, 0],
  [2, 7],
  [5, 3],
  [6, 0],
  [3, 4],
  [6, 2],
  [5, 2],
];

let result = reconstructQueue(arr);
console.log(result);
