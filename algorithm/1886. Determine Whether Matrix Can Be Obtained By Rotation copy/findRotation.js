/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {
	const len = mat.length;
	let sum = len * len;
	let sum1 = 0;
	let sum2 = 0;
	let sum3 = 0;
	let sum4 = 0;

	if (mat.length !== target.length) {
		return false;
	}

    for (let i = 0 ; i < len ; i ++) {
		for (let j = 0 ; j < len ; j ++) {
			if(mat[i][j] == target[i][j]) {
				sum1 ++;
			}
			if(mat[i][j] == target[j][len-i-1]) {
				sum2 ++;
			}
			if(mat[i][j] == target[len-i-1][len-j-1]) {
				sum3 ++;
			}
			if(mat[i][j] == target[len-j-1][i]) {
				sum4 ++;
			}
		}
	}

	return sum === sum1 || sum === sum2 || sum === sum3 || sum === sum4;
};