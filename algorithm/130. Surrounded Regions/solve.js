/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
	var n = board.length;
	if (n <= 1) {
		return board;
	}
	var m = board[0].length;

	for (var i = 0 ; i < n ; i ++) {
		dfs(board, i, 0, n, m);
		dfs(board, i, m - 1, n, m);
	}

	for (var j = 1 ; j < m - 1 ; j ++) {
		dfs(board, 0, j, n, m);
		dfs(board, n-1, j, n, m);
	}

	for (var i = 0 ; i < n ; i ++) {
		for (var j = 0 ; j < m ; j ++) {
			if (board[i][j] === 'A') {
				board[i][j] = 'O';
			} else if (board[i][j] === 'O') {
				board[i][j] = 'X';
			}
		}
	}

	return board;
};

var dfs = function(board, i, j, n, m) {
	if (i >= n || j >= m || i < 0 || j < 0 || board[i][j] !== 'O') {
		return;
	}

	board[i][j] = 'A';
	dfs(board, i-1, j, n, m);
	dfs(board, i+1, j, n, m);
	dfs(board, i, j-1, n, m);
	dfs(board, i, j+1, n, m);
}