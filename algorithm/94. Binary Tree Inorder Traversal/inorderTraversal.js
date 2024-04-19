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
var inorderTraversal = function(root) {
	let arr = [];

	treeOrder(root, arr);
	return arr;
};

var treeOrder = function(node, arr) {
	if (!node) {
		return;
	}

	treeOrder(node.left, arr);
	arr.push(node.val);
	treeOrder(node.right, arr);
}