/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    const len = intervals.length;

    const arr = intervals.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }
        return b[1] - a[1];
    })

    let res = len;
    let max = arr[0][1];
    for (let i = 1 ; i < len ; i ++) {
        if (arr[i][1] <= max) {
            -- res;
        } else {
            max = Math.max(max, arr[i][1]);
        }
    }

    return res;
};