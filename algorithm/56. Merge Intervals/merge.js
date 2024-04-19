/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
	if (intervals.length <= 1) {
		return intervals;
	}

	var newArr = arrSort(intervals);
	var res = [intervals[0]];
	for(var i = 1 , len = newArr.length ; i < len ; i ++) {
		var lastInt = res[res.length-1];
		if (newArr[i][0] <= lastInt[1]) {
			if (newArr[i][1] > lastInt[1]) {
				lastInt[1] = newArr[i][1];
				res[res.length-1] = lastInt;
			}
		} else {
			res.push(newArr[i]);
		}
	}

	return res;
};

var arrSort = function(arr) {
	return arr.sort((item1, item2) => {
		return item1[0] - item2[0];
	})
}




方法二（双指针）：
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const arr = intervals.sort((inter1, inter2) => {
        return inter1[0] - inter2[0];
    })

    const res = [];
    const len = intervals.length;
    let count = 1;
    let left = intervals[0][0];
    let right = intervals[0][1]

    while (count < len) {
        const cur = intervals[count];
        if (right >= cur[0] && right <= cur[1]) {
            right = cur[1];
        } else if (right < cur[0]) {
            res.push([left, right]);
            left = cur[0];
            right = cur[1];
        }

        count ++;
    }

    res.push([left, right]);

    return res;
};