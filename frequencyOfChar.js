const getFrequency = (frequencyString) => {
  let stringArray = frequencyString.split('');
  let frequencies = {};
  for (let k in stringArray) {
    let nowLetter = stringArray[k];
    if (stringArray.hasOwnProperty(k)) {
      if (!frequencies[nowLetter]) {
        frequencies[nowLetter] = 0;
      }

      frequencies[nowLetter] += 1;
    }
  }
  return frequencies;
};

let str = 'deveshagnihotri';
console.log(getFrequency(str));
