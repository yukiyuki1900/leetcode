/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var len = s.length;

    if(len === 0 || numRows <= 1) {
    	return s;
    }

    var arr = [];
    var row = 0;
    var delta = 1;
    var resilt = '';

    for(var k = 0 ; k < numRows ; k ++) {
    	arr[k] = '';
    }

    for(var i = 0 ; i < len ; i ++) {
    	arr[row] += s[i];
    	row += delta;

    	if(row >= numRows) {
    		row = numRows-2;
    		delta = -1;
    	}else if(row < 0) {
    		row = 1;
    		delta = 1;
    	}
    }

    for(var j = 0 ; j < numRows ; j ++) {
    	resilt += arr[j];
    }

    return resilt;
};

