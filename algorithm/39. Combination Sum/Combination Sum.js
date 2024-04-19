	/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
	const arr = sortArray(candidates);
	let res = [];
	let out = [];
	calSum(arr, target, 0, out, res);

	return res;
};

var calSum = function(arr, target, start, out, res) {
	console.log(target)
	if(target < 0) {
		return;
	};
	if(target == 0) {
		res.push([].concat(out));
		return;
	}

	for(let i = start , len = arr.length ; i < len ; i ++) {
		out.push(arr[i]);
		calSum(arr, target - arr[i], i, out, res);
		out.pop();
	}
}

var sortArray = function(arr) {
	return arr.sort((a, b) => {return a-b});
}