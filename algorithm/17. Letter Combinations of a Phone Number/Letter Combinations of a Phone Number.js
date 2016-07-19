/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var map = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };

    var ret = [];

    if(digits.length <= 0) {
        return ret;
    }

    ret.push("");

    for(var i = 0 , dlength = digits.length ; i < dlength ; i ++) {
        var rlength = ret.length;
        for(var j = 0 ; j < rlength ; j ++) {
            var cur = ret[0];
            ret.shift(0);
            for(var k = 0 ; k < map[digits[i]].length ; k ++) {
                ret.push(cur + map[digits[i]][k]);
            }
        }
    }

    return ret;
    
};

