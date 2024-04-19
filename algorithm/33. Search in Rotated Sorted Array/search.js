/**
 * 2022-08-22
 * 方法与下面的一致，都是通过二分法，然后判断升序在左边还是右边来决定左右指针的位置
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let res = -1;

    while (start <= end) {
        const mid = Math.floor((end - start) / 2) + start;
        if (nums[mid] === target) {
            res = mid;
            return mid;
        }
        if (nums[start] <= nums[mid]) {
            if (target < nums[start] || target > nums[mid]) {
                start = mid + 1;
            } else {
                end = mid;
            }
        } else {
            if (target < nums[mid] || target > nums[end]) {
                end = mid - 1;
            } else {
                start = mid;
            }
        }
    }

    return res;
};




/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
	if(nums.length === 0) {
		return -1;
	}

	let len = nums.length;
	let left = 0;
	let right = len - 1;
	while(left <= right) {
		let mid = parseInt((left + right) / 2);
		if (nums[mid] === target) {
			return mid;
		}
		if (nums[0] <= nums[mid]) {
			if (nums[left] <= target && target < nums[mid]) {
				right = mid - 1;
			} else {
				left = mid + 1;
			}
		} else {
			if (nums[mid] < target && target <= nums[right]) {
				left = mid + 1;
			} else {
				right = mid - 1;
			}
		}
	}
	return -1;
};