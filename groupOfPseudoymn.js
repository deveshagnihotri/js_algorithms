let str = ['car', 'as', 'arc', 'sa', 'fa', 'rac', 'car'];
let obj = {};
for (let i = 0; i <= str.length - 1; i++) {
  arr = str[i].split('').sort().join('');
  // console.log(arr)
  if (obj.hasOwnProperty(arr) === true) {
    obj[arr].push(str[i]);
  } else {
    let a = [];
    a.push(str[i]);
    obj[arr] = a;
  }
}

console.log(Object.values(obj));
