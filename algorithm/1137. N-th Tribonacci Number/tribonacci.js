/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let fb = Array(n+1).fill(0);
	fb[1] = 1;
	fb[2] = 1;

	for(let i = 3 ; i <= n ; i ++) {
		fb[i] = fb[i-1] + fb[i-2] + fb[i-3];
	}

	return fb[n];
};