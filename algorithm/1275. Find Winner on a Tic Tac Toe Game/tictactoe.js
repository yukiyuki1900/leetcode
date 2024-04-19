var checkwin = (steps, wins) => {
	for (var i = 0 , len = wins.length ; i < len ; i ++) {
		var win = wins[i];
		var flag = true;
		for (var j = 0 , lenj = win.length ; j < lenj ; j ++) {
			if (steps.indexOf(win[j]) < 0) {
				flag = false;
			}
		}

		if (flag) {
			return true;
		}
	}

	return false;
} 

/**
 * @param {number[][]} moves
 * @return {string}
 */
 var tictactoe = function(moves) {
	var wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
	const A = [];
	const B = [];

	for (var i = 0 , len = moves.length ; i < len ; i ++) {
		const step = moves[i][0] * 3 + moves[i][1];
		// debugger;
		if (i % 2 === 0) {
			A.push(step);
			if (checkwin(A, wins)) {
				return 'A';
			}
		} else {
			B.push(step);
			if (checkwin(B, wins)) {
				return 'B';
			}
		}
	}
	
	if (moves.length === 9) {
		return 'Draw';
	} else {
		return 'Pending';
	}
};