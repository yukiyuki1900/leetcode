/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let left = 0;
    let right = num;
    let ans = false;
  
    while (left <= right) {
      const mid = Math.floor((right - left) / 2) + left;
      const rs = mid * mid;
  
      if (rs === num) {
        return true;
      } else if (rs < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return false;
  };