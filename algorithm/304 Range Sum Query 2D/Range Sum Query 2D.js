/**
 * @constructor
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    var sum = [];
    for(var i = 0, rowlength = matrix.length; i < rowlength ; i ++) {

    	sum[i] = [0];
    	for(var j = 0, collength = matrix[i].length; j < collength; j ++) {
    		sum[i][j+1] = sum[i][j] + matrix[i][j];
    	}
    }
    this.sum = sum;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
	var count = 0;
    for(var i = 0, rowlength = this.sum.length; i < rowlength ; i ++) {
    	//console.log(this.sum[i]);
    	var collength = this.sum[i].length;
    	if(i < row1 || i > row2) {
    		continue;
    	}else {
    		count += (this.sum[i][col2+1] - this.sum[i][col1]);
    	}
    	//console.log(count);
    }

    return count;
};


/**
 * Your NumMatrix object will be instantiated and called as such:
 * var numMatrix = new NumMatrix(matrix);
 * numMatrix.sumRegion(0, 1, 2, 3);
 * numMatrix.sumRegion(1, 2, 3, 4);
 */