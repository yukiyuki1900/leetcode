/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
	let left = 0;
	let right = 0;
	const len = nums.length;
	let res = len;
	while (left < len && right < len) {
	  if (nums[right] === val) {
		right ++;
		res --;
	  } else {
		if (left === right) {
		  left ++;
		  right ++;
		} else {
		  nums[left] = nums[right];
		  left ++;
		  right ++;
		}
	  }
	}
  
	return res;
  };