/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
	var t = [];
	var ans = [];
	var arr = nums.sort((a, b) => {
		return a - b;
	})

	dfs(false, 0, arr, t, ans);

	return ans;
};

var dfs = function(choosePre, cur, nums, t, ans) {
	if (cur === nums.length) {
		ans.push([].concat(t));
		return;
	}
	
	dfs(false, cur + 1, nums, t, ans);
	if (!choosePre && cur > 0 && nums[cur] === nums[cur-1]) {
		return;
	}

	t.push(nums[cur]);
	dfs(true, cur + 1, nums, t, ans);

	t.pop(nums.length - 1);
}