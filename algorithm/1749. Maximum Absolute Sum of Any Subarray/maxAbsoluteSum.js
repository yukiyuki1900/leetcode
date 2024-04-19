/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
	if (nums.length <= 0) {
		return nums;
	}

	var res = nums[0];
	var maxItm = nums[0];
	var minItm = nums[0];
	for (var i = 1 , len = nums.length ; i < len ; i ++) {
		maxItm = Math.max(maxItm + nums[i], nums[i]);
		minItm = Math.min(minItm + nums[i], nums[i]);
		res = Math.max(Math.abs(maxItm), Math.abs(minItm), Math.abs(res));
	}

	return Math.abs(res);
};