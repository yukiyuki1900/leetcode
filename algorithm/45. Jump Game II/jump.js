/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
	let count = 0;
	let last = 0;
	let cur = 0;

	for(let i = 0 , len = nums.length ; i < len ; i ++) {
		if(i > last) {
			last = cur;
			count ++;
		}
		cur = Math.max(cur, i+nums[i]);
	}
	return count;
};