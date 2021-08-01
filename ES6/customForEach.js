const arr = ['a', 'b', 'c', 'd'];

Array.prototype.customForEach = function(processMap, context) {
  for(let i = 0; i < this.length; i++){
    if(this.indexOf(this[i] > -1)){
      processMap.call(context, this[i], i, this);
    }
  }
}

const upperCaseList = [];
arr.customForEach((word, index, context) => {
  upperCaseList.push(word.toUpperCase())
})

console.log(upperCaseList);