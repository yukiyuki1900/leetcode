/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	const len = nums.length;
	let res = len;
  
	if (len === 1) {
	  return res;
	}
  
	let left = 0;
	let right = 1;
  
	while (right < len) {
	  if (nums[left] == nums[right]) {
		right ++;
		res --;
	  } else {
		left ++;
		nums[left] = nums[right];
		right ++;
	  }
	}
  
	return res;
  };