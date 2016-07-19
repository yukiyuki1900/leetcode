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
    if((root.val - p.val) * (root.val - q.val) <= 0) {
        return root.val;
    }else if(root.val > p.val) {
        return lowestCommonAncestor(root.left, p, q);
    }else {
        return lowestCommonAncestor(root.right, p, q);
    }
};

//lowestCommonAncestor(node1, node6, node5)
