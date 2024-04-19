/**
 * @param {number[][]} intervals
 * @param {number[]} toBeRemoved
 * @return {number[][]}
 */
var removeInterval = function(intervals, toBeRemoved) {
    const res = [];
    intervals.forEach((interval) => {
        if (toBeRemoved[1] <= interval[0] || toBeRemoved[0] >= interval[1]) {
            res.push(interval);
        } else {
            if ((toBeRemoved[0] > interval[0]) && (toBeRemoved[1] < interval[1])) {
                res.push([interval[0], toBeRemoved[0]]);
                res.push([toBeRemoved[1], interval[1]]);
            } else if (toBeRemoved[0] > interval[0]) {
                res.push([interval[0], toBeRemoved[0]]);
            } else if (toBeRemoved[1] < interval[1]) {
                res.push([toBeRemoved[1], interval[1]]);
            }
        }
    })
    return res;
};