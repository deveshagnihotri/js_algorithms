var coinChanges = function (amount, coins) {
  if (amount === 0) return 1;
  const dp = [1].concat(Array(amount).fill(0));
  for (let i = 0; i < coins.length; i++) {
    for (let j = 1; j < amount + 1; j++) {
      if (j - coins[i] >= 0) {
        dp[j] = dp[j] + dp[j - coins[i]];
      }
    }
  }
  return dp[dp.length - 1];
};

let amount = 5;
let coins = [1, 2, 5];

let result = coinChanges(amount, coins);
console.log(result);
