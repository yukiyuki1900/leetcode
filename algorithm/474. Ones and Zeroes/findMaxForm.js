/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
	let dp = Array(m+1);
	for(let i = 0 , len = dp.length ; i < len ; i ++) {
		dp[i] = Array(n+1).fill(0);
	}
	for(let i = 0 , len = strs.length ; i < len ; i ++) {
		let str = strs[i];
		let count0 = 0;
		let count1 = 0;
		for(let j = 0 , lenj = str.length ; j < lenj ; j ++) {
			if(parseInt(str[j], 10) === 0) {
				count0 ++;
			}
			if(parseInt(str[j], 10) === 1) {
				count1 ++;
			}
		}

		for(let j = m ; j >= count0 ; j --) {
			for(let k = n ; k >= count1 ; k --) {
				dp[j][k] = Math.max(dp[j][k], dp[j-count0][k-count1] + 1);
			}
		}
	}

	return dp[m][n];
};