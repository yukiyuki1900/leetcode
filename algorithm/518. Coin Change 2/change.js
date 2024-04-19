/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
	let dp = Array(amount+1).fill(0);
	dp[0] = 1;

	for(let i = 0 , len = coins.length ; i < len ; i ++) {
		let we = coins[i];
		for(let j = we ; j <= amount ; j ++) {
			dp[j] = dp[j] + dp[j-we];
		}
	}

	return dp[amount];
};