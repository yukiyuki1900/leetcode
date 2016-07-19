/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var vows = '';
    var result = '';

    for(var i = 0 , len = s.length ; i < len ; i ++) {
        if(/[aeiouAEIOU]/.test(s[i])) {
            vows = s[i] + vows;
        }
    }

    for(i = 0 , len = s.length ; i < len ; i ++) {
        if(/[aeiouAEIOU]/.test(s[i])) {
            result += vows[0];
            vows = vows.substr(1);
        }else {
            result += s[i];
        }
    }

    return result;
};

