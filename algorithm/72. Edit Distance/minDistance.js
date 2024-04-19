/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
	var n = word1.length;
	var m = word2.length;
	var dp = [];

	for (let i = 0 ; i < n + 1 ; i ++) {
		dp[i] = [];
	}

	for (let i = 0 ; i < n + 1 ; i++) {
		dp[i][0] = i;
	}
	for (let j = 0 ; j < m + 1 ; j ++) {
		dp[0][j] = j;
	}

	for (let i = 1 ; i < n + 1 ; i ++) {
		for (let j = 1 ; j < m + 1 ; j ++) {
			var left = (dp[i-1][j] || 0) + 1;
			var right = (dp[i][j-1] || 0) + 1;
			var left_right = dp[i-1][j-1] || 0;
			if (word1[i-1] !== word2[j-1]) {
				left_right ++;
			}
			dp[i][j] = Math.min(left, right, left_right);
		}
	}

	return dp[n][m];
};