/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var arr = str.split(' ');
    var obj = {};
    var unique = {};
    if(pattern.length !== arr.length) {
        return false;
    }
    for(var i = 0, len = arr.length; i < len; i ++) {
        if(typeof obj[pattern[i]] === 'undefined') {
            if(typeof unique[arr[i]] === 'undefined') {
                obj[pattern[i]] = arr[i];
                unique[arr[i]] = pattern[i];
            }else {
                return false;
            }
        }else {
            if(obj[pattern[i]] === arr[i]) {
                continue;
            }else {
                return false;
            }
        }
    }

    return true;
};
