/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
	let str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
	let len = Math.floor(str.length / 2);

	for(let i = 0 ; i < len ; i ++) {
		if(str[i] !== str[str.length - i - 1]) {
			return false;
		}
	}

	return true;
}