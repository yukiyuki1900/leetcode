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
 */
var BSTIterator = function(root) {
	this.idx = 0;
	this.arr = [];

	this.ordertree(root, this.arr);
};

BSTIterator.prototype.ordertree = function(node, arr) {
	if (!node) {
		return;
	}

	this.ordertree(node.left, arr);
	arr.push(node.val);
	this.ordertree(node.right, arr);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
	return this.arr[this.idx ++];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
	return this.idx < this.arr.length;
};