/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
	var m = grid.length;
	var n = grid[0].length;

	if (grid[0][0] === 1 || grid[m-1][n-1] === 1) {
		return -1;
	}
	if (m === 1 && grid[0][0] === 0) {
		return 1;
	}

	var XY = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
	var que = [];
	var map = Array(m).fill(0).map((x) => Array(n).fill(0));
	que.push([0, 0]);
	var count = 1;

	while(que.length > 0) {
		var len = que.length;
		for (var i = 0 ; i < len ; i ++) {
			var cur = que.shift();

			for (var j = 0 ; j < 8 ; j ++) {
				var tmpx = cur[0] + XY[j][0];
				var tmpy = cur[1] + XY[j][1];

				if(tmpx >= 0 && tmpx < m && tmpy >= 0 && tmpy < n && grid[tmpx][tmpy] === 0 && map[tmpx][tmpy] !== 1) {
					que.push([tmpx, tmpy]);
					map[tmpx][tmpy] = 1;
				}
			}

			if (cur[0] === m-1 && cur[1] === n-1) {
				return count;
			}
		}

		count ++;
	}

	return -1;
};