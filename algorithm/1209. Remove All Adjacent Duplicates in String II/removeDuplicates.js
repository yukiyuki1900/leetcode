/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
	var count = [];
	var res = s.split('');

	for (var i = 0 ; i < res.length ; i ++) {
		if (i === 0 || res[i - 1] != res[i]) {
			count[i] = 1;
		} else {
			count[i] = count[i-1] + 1;
			if (count[i] === k) {
				res.splice(i-k+1, k);
				i = i - k;
			}
		}
	}

	return res.join('');
};