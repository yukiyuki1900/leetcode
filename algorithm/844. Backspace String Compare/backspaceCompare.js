/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
	var i = s.length - 1;
	var j = t.length - 1;
	var countS = 0;
	var countT = 0;

	while (i >= 0 || j >= 0) {
		while(i >= 0) {
			if(s[i] === '#') {
				countS ++;
				i --;
			} else if(countS > 0){
				countS --;
				i --;
			} else {
				break;
			}
		}

		while(j >= 0) {
			if(t[j] === '#') {
				countT ++;
				j --;
			} else if(countT > 0) {
				countT --;
				j --;
			} else {
				break;
			}
		}
		if (i >= 0 && j >= 0) {
			if(s[i] !== t[j]) {
				return false;
			}
		} else if(i >= 0 || j >= 0) {
			return false
		}

		i --;
		j --;
	}
	return true;
};