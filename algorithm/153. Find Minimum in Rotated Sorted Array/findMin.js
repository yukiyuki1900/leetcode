/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
	var left = 0;
	var right = nums.length - 1;

	while (left < right) {
		mid = parseInt((right - left) / 2) + left;

		if (nums[mid] < nums[right]) {
			right = mid;
		} else {
			left = mid + 1;
		}
	} 

	return nums[left];
};