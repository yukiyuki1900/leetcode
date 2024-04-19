/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
	let left = 0;
	let right = nums.length - 1;
	let res = -1;

	while (left < right) {
		let mid = left + (right - left) / 2;
		let isOdd = mid %2 === 1;

		if (nums[mid] === nums[mid-1]) {
			if (isOdd) {
				left = mid + 1;
			} else {
				right = mid - 2;
			}
		} else if (nums[mid] === nums[mid+1]) {
			if (isOdd) {
				right = mid - 1;
			} else {
				left = mid + 2;
			}
		} else {
			return nums[mid];
		}
	}

	return nums[left];
};