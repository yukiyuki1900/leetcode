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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
	const map = {};
	binaryTree(root, x, y, 0, map, null);

	if (map[x].len === map[y].len && map[x].parent !== map[y].parent) {
		return true;
	}

	return false;
};

var binaryTree = function(node, x, y, len, map, parent) {
	if (!node) {
		return;
	}

	if (node.val === x) {
		map[x] = {
			len,
			parent: parent,
		};
	}

	if (node.val === y) {
		map[y] = {
			len,
			parent: parent,
		};
	}

	len ++;
	binaryTree(node.left, x, y, len, map, node);
	binaryTree(node.right, x, y, len, map, node);
}