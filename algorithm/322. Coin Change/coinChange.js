/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
	if(!coins.length || amount === 0) {
		return 0;
	}

	let dp = Array(amount+1).fill(0);
	for(let i = 0 , len = coins.length ; i < len ; i ++) {
		let we = coins[i];
		for(let j = we ; j <= amount ; j ++) {
			if(j === we) {
				dp[j] = 1;  // 放入一个金币
			}else if(dp[j] === 0 && dp[j-we] !== 0) {  // 加一个coin
				dp[j] = dp[j-we] + 1;
			}else if(dp[j-we] !== 0) {  // 取最小值
				dp[j] = Math.min(dp[j], dp[j-we] + 1);
			}
		}
	}

	return dp[amount] === 0 ? -1 : dp[amount];
};