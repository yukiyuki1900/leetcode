/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
	let res = null;
	
	const dfs = (curNode, p, q) => {
		if (!curNode) {
			return false;
		}

		const lres = dfs(curNode.left, p, q);
		const rres = dfs(curNode.right, p, q);

		if ((lres && rres) || ((lres || rres) && (curNode.val === p.val || curNode.val === q.val))) {
			res = curNode;
		}

		return curNode.val === p.val || curNode.val === q.val || lres || rres;
	}

	dfs(root, p, q);

	return res;
};

