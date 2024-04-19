/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	if (nums.length <= 1) {
		return nums;
	}
	var res = nums[0];
	var sum = nums[0];
    for (var i = 1 , len = nums.length ; i < len ; i ++) {
		sum = Math.max(sum + nums[i], nums[i]);
		res = Math.max(sum, res);
	}

	return res;
};