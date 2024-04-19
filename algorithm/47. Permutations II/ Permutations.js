/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
	var ans = [];
	var t = [];
	var visit = {};
	var arr = nums.sort((a, b) => {
		return a - b;
	})

	backtrack(arr, 0, t, ans, visit);

	return ans;
};

var backtrack = function(nums, idx, t, ans, visit) {
	if (idx === nums.length) {
		ans.push([].concat(t));
	}

	for(var i = 0 , len = nums.length ; i < len ; i ++) {
		if (!!visit[i] || (i > 0 && nums[i-1] === nums[i] && !visit[i-1])) {
			continue;
		}
		visit[i] = true;
		t.push(nums[i]);
		backtrack(nums, idx + 1, t, ans, visit);
		visit[i] = false;
		t.pop(t.length - 1);
	}
}