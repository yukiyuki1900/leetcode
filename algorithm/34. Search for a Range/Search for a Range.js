/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 双指针
var searchRange = function(nums, target) {
    var result = [-1, -1];
    var len = nums.length;

    if(len <= 0 || nums[0] > target || nums[len-1] < target) {
        return result;
    }

    var i = 0;
    var j = len - 1;

    while(i <= j) {
        if(nums[i] < target) {
            i ++;
        }
        if(nums[j] > target) {
            j --;
        }
        if(nums[i] == target && nums[j] == target) {
            result[0] = i;
            result[1] = j;
            return result;
        }
     }

    return result;

};

// 二分查找
var searchRange = function(nums, target) {
	var res = [-1, -1];
	var len = nums.length;

	if (len <= 0 || nums[0] > target || nums[len - 1] < target) {
		return res;
	}
	
	var leftIdx = -1;
	var rightIdx = -1;

	// 查询左边界
	var left = 0;
	var right = len - 1;
	while (left <= right) {
		var mid = parseInt((right - left) / 2) + left;
		if (nums[mid] === target) {
			if (nums[mid - 1] === target) {
				right = mid - 1;
			} else {
				left = mid;
				break;
			}
		} else if (nums[mid] > target) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}
	leftIdx = left;

	// 查询右边界
	var left = 0;
	var right = len - 1;
	while (left <= right) {
		var mid = parseInt((right - left) / 2) + left;
		if (nums[mid] === target) {
			if (nums[mid + 1] === target) {
				left = mid + 1;
			} else {
				right = mid;
				break;
			}
		} else if (nums[mid] > target) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}
	rightIdx = right;

	if (leftIdx <= rightIdx && nums[leftIdx] === target && nums[rightIdx] === target) {
		res = [leftIdx, rightIdx];
	}
	return res;
};

