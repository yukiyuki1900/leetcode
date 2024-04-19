/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
	var len = nums.length;
	var left = [];
	var right = [];
	var res = [];
	left[0] = 1;
	right[len-1] = 1;

	for(var i = 1 ; i <= len - 1 ; i ++) {
		left[i] = left[i-1] * nums[i-1]; 
	}
	for(var i = len-2 ; i >= 0 ; i --) {
		right[i] = right[i+1] * nums[i+1];
	}
	console.log(left)
	console.log(right)
	for(var i = 0 ; i < len ; i ++) {
		res[i] = left[i] * right[i];
	}

	return res;
};

// 优化，第二轮遍历只需要一个字段存起来乘积即可
var productExceptSelf = function(nums) {
	var len = nums.length;
	var left = [];
	var res = [];
	left[0] = 1;
	var right = 1;

	for(var i = 1 ; i <= len - 1 ; i ++) {
		left[i] = left[i-1] * nums[i-1]; 
	}
	for(var i = len-1 ; i >= 0 ; i --) {
		res[i] = left[i] * right;
		right *= nums[i];
	}

	return res;
};