/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
	let dp = Array(target+1).fill(0);
	dp[0] = 1;

	// 不同顺序视为一个组合
	// for(let i = 0 , len = nums.length ; i < len ; i ++) {
	// 	let we = nums[i];
	// 	for(let j = we ; j <= target ; j ++) {
	// 		dp[j] = dp[j] + dp[j-we];
	// 	}
	// }

	// 不同顺序视为不同组合
	for(let i = 1 ; i <= target ; i ++) {
		for(let j = 0 ; j < nums.length ; j ++) {
			let we = nums[j];
			if(i >= we) {
				dp[i] = dp[i] + dp[i-we];
			}
		}
	}

	return dp[target];
};