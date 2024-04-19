/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
	var ans = [];
	var t = [];
	dfs(0, nums, t, ans);

	return ans;
};

var dfs = function(cur, nums, t, ans) {
	if (cur === nums.length) {
		ans.push([].concat(t))
		return;
	}

	t.push(nums[cur]);
	dfs(cur+1, nums, t, ans);

	t.pop(t.length - 1);
	dfs(cur+1, nums, t, ans);
}