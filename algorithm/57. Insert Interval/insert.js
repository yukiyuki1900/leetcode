/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if (intervals.length <= 0) {
		return [newInterval];
	}

	var sortInter = sortArray(intervals);
	var res = [];
	var resLeft = [];
	var resRight = [];
	var newInter = [];
	var count = 0;
	for(var i = 0 , len = sortInter.length ; i < len ; i ++) {
		var item = sortInter[i];
		if (newInterval[1] < item[0]) {
			resRight.push(item);
			count ++;
		} else if (newInterval[0] > item[1]) {
			resLeft.push(item);
		} else {
			newInterval[0] = Math.min(newInterval[0], item[0]);
			newInterval[1] = Math.max(newInterval[1], item[1]);
		}
	}

	res = [].concat(resLeft, [newInterval], resRight);

	return res;
};

var sortArray = function(arr) {
	return arr.sort((item1, item2) => {
		return item1[0] - item2[0];
	})
}