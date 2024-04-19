/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (nums.length <= 1) {
		return nums;
	}

	let res = nums[0];
	let max = nums[0];
	let min = nums[0];
	for (let i = 1 , len = nums.length ; i < len ; i ++) {
		if(nums[i] > 0) {
			max = Math.max(max * nums[i], nums[i]);
			min = Math.min(min * nums[i], nums[i]);
		} else {
			var tmp = max;
			max = Math.max(min * nums[i], nums[i]);
			min = Math.min(tmp * nums[i], nums[i]);
		}
		res = Math.max(max, res);
	}

	return res;
};