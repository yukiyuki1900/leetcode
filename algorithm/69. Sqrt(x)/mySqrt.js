/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
	let left = 0;
	let right = x;
	let ans = -1;
  
	while (left <= right) {
	  let mid = Math.floor((right - left) / 2) + left;
	  const rs = mid * mid;
  
	  if (rs <= x) {
		ans = mid;
		left = mid + 1;
	  } else {
		right = mid - 1;
	  }
	}
  
	return ans;
  };