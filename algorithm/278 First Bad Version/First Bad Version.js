/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
    	var low = 1;
    	var high = n;
		while(low < high) {
			temp = low + parseInt((high-low)/2);
			if(isBadVersion(temp)) {
				high = temp;
			}else {
				low = temp+1;
			}
		}

		return low;   
    };
};