var isSubsequence = function (s, t) {
  if (s.length === 0) return true;
  var indexS = 0,
    indexT = 0;
  while (indexT < t.length) {
    if (t.charAt(indexT) === s.charAt(indexS)) {
      indexS++;
      if (indexS === s.length) return true;
    }
    indexT++;
  }
  return false;
};
