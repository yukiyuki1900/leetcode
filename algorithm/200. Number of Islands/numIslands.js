/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
	let count = 0;
	
	for(let i = 0 , leni = grid.length ; i < leni ; i ++) {
		for(let j = 0 , lenj = grid[0].length ; j < lenj ; j ++) {
			if(grid[i][j] === '1') {
				dfs(grid, i, j);
				count ++;
			}
		}
	}
    
    return count;
};

var dfs = function(grid, i, j) {
	if(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === '0') {
		return;
	}
	grid[i][j] = '0';
	dfs(grid, i - 1 , j);
	dfs(grid, i + 1 , j);
	dfs(grid, i , j - 1);
	dfs(grid, i , j + 1);
}