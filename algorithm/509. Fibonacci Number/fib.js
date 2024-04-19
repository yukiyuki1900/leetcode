/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
	let fb = Array(n+1).fill(0);
	fb[1] = 1;

	for(let i = 2 ; i <= n ; i ++) {
		fb[i] = fb[i-1] + fb[i-2];
	}

	return fb[n];
};