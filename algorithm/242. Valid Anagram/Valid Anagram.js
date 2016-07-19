/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var slen = s.length;
    var tlen = t.length;
    if(slen !== tlen) {
        return false;
    }
    var map = {};
    var flag = true;
    for(var i = 0 ; i < slen ; i ++ ) {
        if(typeof map[s[i]] !== 'undefined') {
            map[s[i]] ++;
        }else {
            map[s[i]] = 1;
        }
    }
    for(var j = 0 ; j < tlen ; j ++ ) {
        if(typeof map[t[j]] === 'undefined') {
            flag = false;
        }else if(map[t[j]] === 0) {
            flag = false;
        }else {
            map[t[j]] --;
        }
    }
    return flag;
};