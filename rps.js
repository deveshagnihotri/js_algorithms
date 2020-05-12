var rps = function (round) {
  let result = [];
  let possibleCases = ['r', 'p', 's'];

  var play = function (playedFor, round) {
    if (round === 0) {
      result.push(playedFor);
      return;
    }
    for (let i = 0; i < 3; i++) {
      play(playedFor + possibleCases[i], round - 1);
    }
  };

  play('', round);
  return result;
};

var res = rps(2);
console.log(res);
