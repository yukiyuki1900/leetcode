/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
	var m = matrix.length;
	var n = matrix[0].length;

	var left = 0;
	var right = m * n -1;

	while (left <= right) {
		var index = parseInt((right - left) / 2) + left;
		var mid = matrix[parseInt(index / n)][index % n];

		if (mid === target) {
			return true;
		} else if (mid < target) {
			left = index + 1;
		} else {
			right = index - 1;
		}
	}

	return false;
};