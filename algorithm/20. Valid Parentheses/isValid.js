/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	if(s.length === 0) {
		return true;
	}
    const map = {
		'(': -1,
		')': 1,
		'[': -2,
		']': 2,
		'{': -3,
		'}': 3,
	};
	let stack = [];

	for(let i = 0 , len = s.length ; i < len ; i ++) {
		if(map[s[i]] < 0) {
			stack.push(s[i]);
		}else {
			let tmp = stack.pop();
			if(map[tmp] + map[s[i]] !== 0) {
				return false;
			}
		}
	}

	return stack.length === 0;
};