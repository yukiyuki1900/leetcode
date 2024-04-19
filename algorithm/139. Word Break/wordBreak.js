/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
	let n = s.length;
	let dp = Array(n+1).fill(false);
	dp[0] = true;

	for(let i = 0 ; i <= n ; i ++) {
		for(let j = 0 , len = wordDict.length ; j < len ; j ++) {
			const word = wordDict[j];
			const we = word.length;
			if(i >= we && word === s.substr(i-we, we)) {
				dp[i] = dp[i] || dp[i-we];
			}
		}
	}

	return dp[n];
};