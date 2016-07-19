/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var len = s.length;
    var result = '';
    for(var i =  len-1 ; i >= 0 ; i --) {
        result += s[i];
    }
    return result;
};

