/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
	var stack = [];

	for (var i = 0 , len = s.length ; i < len ; i ++) {
		if (stack.length && stack[stack.length - 1] === s[i]) {
			stack.pop();
		} else {
			stack.push(s[i]);
		}
	}

	return stack.join('');
};
