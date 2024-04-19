/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
	let start = 0;
	let end = s.length - 1;

	while(start < end) {
		if(s[start] !== s[end]) {
			return isPalindrome(s, start + 1, end) || isPalindrome(s, start, end - 1);
		}
		start ++;
		end --;
	}

	return true;
};

var isPalindrome = function(s, start, end) {
	while(start < end) {
		if(s[start] !== s[end]) {
			return false;
		}
		start ++;
		end --;
	}
	return true;
}