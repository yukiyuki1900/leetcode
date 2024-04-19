/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
	const height = bfs(root);
	return height;
};

// 深搜
var dfs = function (node) {
	if (node === null) {
		return 0;
	}
	var leftHeight = dfs(node.left);
	var rightHeight = dfs(node.right);
	return Math.max(leftHeight, rightHeight) + 1;
}

// 宽搜
var bfs = function (node) {
	var que = [];
	var h = 0;
	if (node !== null) {
		que.push(node);
	}

	while (que.length) {
		var len = que.length;
		while (len > 0) {
			var cur = que.shift();
			if (cur.left) {
				que.push(cur.left);
			}
			if (cur.right) {
				que.push(cur.right);
			}
			len --;
		}
		h ++;
	}

	return h;
}