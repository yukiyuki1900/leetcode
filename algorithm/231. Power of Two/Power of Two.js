/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n <= 0) {
        return false;
    }
    if( n & (n-1)) {
        return false;
    }else {
        return true;
    }
};