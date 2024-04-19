/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
	if(nums.length <= 0 || target < nums[0]) {
			return 0;
	}
	for(var i = 0 , len = nums.length ; i < len ; i ++) {
			if(nums[i] === target || nums[i] > target) {
					return i;
			}
	}

	return i;
};


// 2024-04-11  二分查找
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
	let left = 0;
	let right = nums.length - 1;

	while (left <= right) {
		const mid = Math.floor((right - left) / 2) + left;

		if (nums[mid] === target) {
			return mid;
		}
		if (nums[mid] < target) {
			left = mid +1;
		} else if (nums[mid] > target) {
			right = mid - 1;
		}
	}

	nums.splice(left, 0, target);
	return left;
};

