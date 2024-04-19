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
var maxPathSum = function(root) {
	let max = Number.MIN_SAFE_INTEGER;

	var deep = function(node) {
		if (node === null) {
			return 0;
		}
		const leftVal = deep(node.left);
		const rightVal = deep(node.right);
		const curMax = Math.max(node.val, node.val + leftVal,  node.val + rightVal);
		max = Math.max(max, node.val, node.val + leftVal,  node.val + rightVal, node.val + leftVal + rightVal);

		return curMax;
	};

	deep(root);

	return max;
};