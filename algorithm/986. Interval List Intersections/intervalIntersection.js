/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
	var leni = firstList.length;
	var lenj = secondList.length;
	var i = 0;
	var j = 0;
	var res = [];

	while(i < leni && j < lenj) {
		var tempLeft = Math.max(firstList[i][0], secondList[j][0]);
		var tempRight = Math.min(firstList[i][1], secondList[j][1]);

		if(tempLeft <= tempRight) {
			res.push([tempLeft, tempRight]);
		}

		if(firstList[i][1] <= secondList[j][1]) {
			i ++;
		}else {
			j ++;
		}
	}

	return res;
};