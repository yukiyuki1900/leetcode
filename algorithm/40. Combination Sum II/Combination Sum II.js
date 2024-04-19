	/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
	const arr = sortArray(candidates);
	let res = [];
	let tmp = [];

	calSum(arr, target, 0, tmp, res);

	return res;
};

const map = {};

var calSum = function(arr, target, start, tmp, res) {
	if(target < 0) {
		return;
	}
	if(target == 0) {
		const newtmp = [].concat(tmp);
		const index = newtmp.join('');
		if(!map[index]) {
			res.push(newtmp);
			map[index] = 1;
		}
		return;
	}
	for(let i = start , len = arr.length ; i < len ; i ++) {
		tmp.push(arr[i]);
		calSum(arr, target-arr[i], i+1, tmp, res);
		tmp.pop();
	}
}

var sortArray = function(arr) {
	return arr.sort((a, b) => {
		return a-b;
	})
}