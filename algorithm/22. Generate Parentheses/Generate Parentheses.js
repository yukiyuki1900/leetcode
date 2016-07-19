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

