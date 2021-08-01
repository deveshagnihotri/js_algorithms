const arr = [2, 3, 4, 545, 2, 33, 65];

Array.prototype.customFilter  = function(processMap, context) {
  const newArr = [];
  for(let i = 0; i < this.length; i++){
    if(this.indexOf(this[i] > -1)){
      newArr[i] = processMap.call(context, this[i], i, this);
    }
  }
  return newArr;
}

const result  = arr.customFilter(item => item > 4);

console.log(result)
