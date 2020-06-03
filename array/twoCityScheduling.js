var twoCitySchedCost = function (costs) {
  costs.sort((a, b) => Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]));
  let aCount = 0;
  let bCount = 0;
  let minimiumCost = 0;
  let len = costs.length;
  for (let i = 0; i < len; i++) {
    if (
      (costs[i][0] <= costs[i][1] && aCount < len / 2) ||
      bCount === len / 2
    ) {
      minimiumCost = minimiumCost + costs[i][0];
      aCount++;
    } else {
      minimiumCost = minimiumCost + costs[i][1];
      bCount++;
    }
  }
  return minimiumCost;
};

let costs = [
  [518, 518],
  [71, 971],
  [121, 862],
  [967, 607],
  [138, 754],
  [513, 337],
  [499, 873],
  [337, 387],
  [647, 917],
  [76, 417],
];

let result = twoCitySchedCost(costs);
console.log(result);
