/**
 * @param {string} s
 * @return {string}
 */

var getlongstr = function(s, c1, c2) {
    var l = c1;
    var r = c2;
    var len = s.length;

    while(l >= 0 && r <= len && s[l] === s[r]) {
        l --;
        r ++;
    }
    return s.substr(l+1, r-l-1);
}

var longestPalindrome = function(s) {
    var len = s.length;
    if(len === 0) {
        return "";
    }
    var longstr = s.substr(0, 1);
    for(var i = 0 ; i < len ; i ++) {
        var longodd = getlongstr(s, i, i);
        if(longodd.length > longstr.length) {
            longstr = longodd;
        }
        
        var longeven = getlongstr(s, i, i+1);
        if(longeven.length > longstr.length) {
            longstr = longeven;
        }

    }
    return longstr;
};