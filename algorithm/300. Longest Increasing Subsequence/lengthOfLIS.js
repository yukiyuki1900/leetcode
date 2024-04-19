/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
	let reach = 0;
	let len = nums.length;
	
	for(let i = 0 ; i < len ; i ++) {
		if(i > reach || reach >= len - 1) {
			break;
		}
		reach = Math.max(reach, i+nums[i]);
	}

	return reach >= len - 1;
};