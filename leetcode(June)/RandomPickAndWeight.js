var total, temp;
var sumArray;
var Solution = function (w) {
  this.map = new Map();
  this.sum = 0;

  for (let i = 0; i < w.length; i++) {
    this.sum += w[i];
    this.map.set(this.map, i);
    this.keys = [...this.map.keys()].sort((a, b) => a - b);
  }
};

Solution.prototype.pickIndex = function () {
  const r = parseInt(Math.random() * this.sum);
  for (const key of this.keys) {
    if (r < key) {
      return this.map.get(key);
    }
  }
};
