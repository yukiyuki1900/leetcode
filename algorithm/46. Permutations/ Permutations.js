/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
	let res = [];
	
	cal(nums, 0, res);

	return res;
};

var cal = function(arr, start, res) {
	if(start == arr.length - 1) {
		res.push([].concat(arr));
	}
	for(let i = start , len = arr.length ; i < len ; i ++) {
		swap(arr, start, i);
		cal(arr, start+1, res);
		swap(arr, start, i);
	}
}

var swap = function(arr, index1, index2) {
	let item = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = item;
}



// 方法二：遍历
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
	var ans = [];
	var t = [];
	var visit = {};

	backtrack(nums, 0, t, ans, visit);

	return ans;
};

var backtrack = function(nums, idx, t, ans, visit) {
	if (idx === nums.length) {
		ans.push([].concat(t));
	}

	for(var i = 0 , len = nums.length ; i < len ; i ++) {
		if (!!visit[i]) {
			continue;
		}
		visit[i] = true;
		t.push(nums[i]);
		backtrack(nums, idx + 1, t, ans, visit);
		visit[i] = false;
		t.pop(t.length - 1);
	}
}