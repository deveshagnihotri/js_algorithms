const arr = [2, 3, 4, 545, 2, 33, 65];

Array.prototype.customMap  = function (processMap){
  const newArr = [];
  for(let i = 0; i < this.length; i++){
    if(this.indexOf(this[i] > -1)){
      newArr[i] = processMap(this[i], i, this);
    }
  }
  return newArr;
}

const result  = arr.customMap(item => {
  return item * 2
});

console.log(result)
