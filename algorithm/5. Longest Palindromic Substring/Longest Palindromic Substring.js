/**
 * @param {string} s
 * @return {string}
 * 2022-08-28
 * 动态规划，参考：https://leetcode.com/problems/longest-palindromic-substring/discuss/1801960/Java-Multiple-approach-with-explanation
 * 字符串为s，假设i和j为回文字符串的下标，借助二维数组dp[i][j]来储存回是否为文字符串，代表i到j为回文字符串，
 * 如果s[i]~s[j]为回文字符串，也就是s[i]===s[j]，即dp[i][j]值为true，那么也会满足条件s[i] === s[j] && dp[i+1][j-1]
 * gap长度从0开始遍历，也就是dp[0][0],dp[1][1],dp[2][2]...因为单个字符本身就是回文字符串
 * gap逐渐增大，保证回溯的时候字符串都曾遍历过
 */
var longestPalindrome = function(s) {
    const len = s.length;
    let res;

    if (len < 2) {
        return s;
    }

    const dp = [];
    for (let i = 0 ; i < len ; i ++) {
        dp[i] = [];
    }

    for (let gap = 0 ; gap < len ; gap ++) {
        for (let i = 0 , j = gap ; j < len ; i ++, j ++) {
            if (gap === 0) {
                dp[i][j] = true;
            } else if (gap === 1 && s[i] === s[j]) {   // 注意回文字符串长度为偶数情况
                dp[i][j] = true;
            } else if (s[i] === s[j] && dp[i+1][j-1]) {
                dp[i][j] = true;
            }

            if (dp[i][j]) {
                res = s.substr(i, j-i+1);
            }
        }
    }

    return res;
};


/**
 * @param {string} s
 * @return {string}
 * 2022-08-28
 */
var longestPalindrome = function(s) {
    const len = s.length;
    let res = '';

    if (len < 2) {
        return s;
    }

    const expand = (start, end) => {
        let max = 0;
        while (start >= 0 && end < len && s[start] === s[end]) {
            start --;
            end ++;
        }

        if ((end-start-1) > res.length) {
            res = s.substr(start + 1, end-start-1);
        }
    };

    for (let i = 0 ; i < len - 1 ; i ++) {
        expand(i, i);
        expand(i, i + 1);
    }

    return res;
};


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