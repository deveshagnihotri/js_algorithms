//remove all vowels from the string
const removeVowels = (s) => {
  let vowels = [];
  let consonant = [];
  for (let i = 0; i < s.length; i++) {
    if (
      s.charAt(i) === 'a' ||
      s.charAt(i) === 'e' ||
      s.charAt(i) === 'i' ||
      s.charAt(i) === 'o' ||
      s.charAt(i) === 'u'
    ) {
      vowels.push(s[i]);
    } else {
      consonant.push(s[i]);
    }
  }
  return consonant.join('');
};

let str = 'deveshagnihotri';
console.log(removeVowels(str));
