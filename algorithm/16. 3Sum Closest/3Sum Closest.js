/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
	let ret = nums[0]+nums[1]+nums[2];
	nums = sort(nums);
	console.log(nums)
	
	for(let i = 0 , len = nums.length ; i < len ; i ++) {
		let start = i + 1;
		let end = len - 1;

		while(start < end) {
			let sum = nums[i] + nums[start] + nums[end];
			if(Math.abs(sum - target) < Math.abs(ret - target)) {
				ret = sum;
			}
			if(sum > target) {
				end --;
			}else if(sum < target) {
				start ++;
			}else {
				return ret;
			}
		}
	}
	
	return ret;
};

var sort = function(nums) {
	return nums.sort((a, b) => {
		return a - b;
	})
}

