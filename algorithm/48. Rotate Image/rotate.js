/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
	const leni = matrix.length;
	for (let i = 0 ; i < leni ; i ++) {
		const lenj = matrix[i].length;
		for ( let j = i + 1 ; j < lenj ; j ++) {
			if (i !== j) {
				let tmp = matrix[i][j];
				matrix[i][j] = matrix[j][i];
				matrix[j][i] = tmp;
			}
		}
	}

	for (let i = 0 ; i < leni ; i ++) {
		const lenj = matrix[i].length;
		const mid = Math.floor(lenj/2);
		for (let j = 0 ; j < mid ; j ++) {
			let tmp = matrix[i][j];
			matrix[i][j] = matrix[i][lenj-j-1];
			matrix[i][lenj-j-1] = tmp;
		}
	}
};


// 方法二
// 每层旋转
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const len = matrix.length;

    for (let i = 0 ; i < len/2 ; i ++) {
        for (let j = i ; j < len - i - 1 ; j ++) {
            let tmp = matrix[i][j];
            matrix[i][j] = matrix[len-j-1][i];
            matrix[len-j-1][i] = matrix[len-i-1][len-j-1];
            matrix[len-i-1][len-j-1] = matrix[j][len-i-1];
            matrix[j][len-i-1] = tmp;
        }
    }
};