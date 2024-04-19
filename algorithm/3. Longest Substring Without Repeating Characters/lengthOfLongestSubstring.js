/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	let hash = {};
	let max = 0;
	let len = s.length;
	let right = 0;

    for (let i = 0 ; i < len ; i ++) {
		if (i !== 0) {
			delete hash[s[i-1]];
		}

		while (right < len && !hash[s[right]]) {
			hash[s[right]] = true;
			right ++;
		}

		max = Math.max(max, right - i);
	}

	return max;
};