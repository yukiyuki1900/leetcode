/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
	var count = 0;
	var isVisited = [];

	for (var i = 0 , leni = isConnected.length ; i < leni ; i ++) {
		if (!isVisited[i]) {
			dfs(isConnected, isVisited, i);
			count ++;
		}
	}

	return count;
};

var dfs = function(isConnected, isVisited, i) {
	for (var j = 0 , lenj = isConnected[0].length ; j < lenj ; j ++) {
		if (isConnected[i][j] === 1 && !isVisited[j]) {
			isVisited[j] = true;
			dfs(isConnected, isVisited, j);
		}
	}
}