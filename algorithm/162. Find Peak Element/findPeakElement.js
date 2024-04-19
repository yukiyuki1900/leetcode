/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
	var len = nums.length;
	for (let i = 0 ; i < len - 1 ; i ++) {
		if (nums[i] > nums[i+1]) {
			return i;
		}
	}
	return len - 1;
};