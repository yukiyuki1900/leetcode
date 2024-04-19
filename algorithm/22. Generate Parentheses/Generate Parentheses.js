/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let count = n;
    let res = [];
    let left = 0;
    let right = 0;
    let str = '';

    const dfs = (left, right, str) => {
        if (left > n || right > n || right > left) {
            return;
        }

        if (left === right && right === n) {
            res.push(str);
            return;
        }

        dfs(left + 1, right, str + '(');
        dfs(left, right + 1, str + ')');
    }

    dfs(1, 0, '(');

    return res;
};


/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function(n) {
    var ret = [];

    var solve = function(dep, maxdep, leftnum, leftnumTotal, s) {
        if(leftnumTotal*2 > maxdep) {
            return;
        }

        if(dep === maxdep) {
            ret.push(s);
            return;
        }

        solve(dep+1, maxdep, leftnum+1, leftnumTotal+1, s+'(');

        if(leftnum > 0) {
            solve(dep+1, maxdep, leftnum-1, leftnumTotal, s+')');
        }

        return ret;

    }

    solve(0, 2*n, 0, 0, '', []);

    return ret;
};

