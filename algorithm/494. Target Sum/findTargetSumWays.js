/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    let sum = nums.reduce((a, b) => {
		return a + b;
	})

	if(sum < S || (sum+S)%2 === 1) {
		return 0;
	}

	let target = (sum+S)/2;
	let dp = Array(target+1).fill(0);
	dp[0] = 1;

	for(let i = 0 , len = nums.length ; i < len ; i ++) {
		const we = nums[i];
		for(let j = target ; j >= we ; -- j) {
			dp[j] = dp[j] + dp[j-we];
		}
	}

	return dp[target];
};