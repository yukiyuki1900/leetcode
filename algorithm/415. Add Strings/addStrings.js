/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
	var i = num1.length - 1;
	var j = num2.length - 1;
	var add = 0;
	var res = [];

	while (i >= 0 || j >= 0 || add > 0) {
		var x = i >= 0 ? parseInt(num1[i]) : 0;
		var y = j >= 0 ? parseInt(num2[j]) : 0;
		var plus = x + y + add;
		res.push(plus % 10);
		add = Math.floor(plus / 10);

		i --;
		j --;
	}

	return res.reverse().join('');
};