/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
	const sum = nums.reduce((a, b) => {
		return a + b;
	}, 0);

	if(sum%2 === 1) {
		return false;
	}

	const target = sum/2;
	let dp = [];
	dp[0] = true;
	for(let i = 0 , len = nums.length ; i < len ; i ++) {
		for(let j = target ; j >= nums[i] ; j --) {
			dp[j] = dp[j] || dp[j-nums[i]];
		}
	}

	return !!dp[target];
};