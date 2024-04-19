/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(num1 === '0' || num2 === '0') {
		return '0';
	}
	let res = [0];
	for(let i = 0 , len1 = num1.length ; i < len1 ; i ++) {
		for(let j = 0 , len2 = num2.length ; j < len2 ; j ++) {
			res[i+j+1] = res[i+j+1] || 0;
			res[i+j+1] += parseInt(num1[i]) * parseInt(num2[j]);
		}
	}

	for(let k = res.length - 1 ; k > 0 ; k --) {
		let ge = res[k]%10;
		let shi = Math.floor(res[k]/10);
		res[k] = ge;
		res[k-1] += shi;
	}
	if(res[0] === 0) {
		res.splice(0,1);
	}

	return res.join('');
};