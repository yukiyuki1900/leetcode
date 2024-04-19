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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
	var res = [];

	dict(root, res);

	return res;
};

var dict = function (node, res) {
	if (node === null) {
		return;
	}
	res.push(node.val);
	dict(node.left, res);
	dict(node.right, res);
}