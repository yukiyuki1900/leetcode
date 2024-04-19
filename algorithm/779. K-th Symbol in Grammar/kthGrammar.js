/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
	var res = getKnum(n, k);
	return res;
};

var getKnum = function(n, k) {
	if (n === 1) {
		return 0;
	}

	var val = getKnum(n-1, Math.floor((k+1)/2));
	if (k%2 === 0) {
		return val === 0 ? 1 : 0;
	} else {
		return val;
	}
}