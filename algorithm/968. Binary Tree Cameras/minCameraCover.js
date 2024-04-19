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
var minCameraCover = function(root) {
    let count = 0;
    const tree = function(node) {
        if (node === null) {
            return 2;
        }

        const leftCount = tree(node.left);
        const rightCount = tree(node.right);

        if (leftCount === 2 && rightCount === 2) {
            return 0;
        }

        if (leftCount === 0 || rightCount === 0) {
            count ++;
            return 1;
        }

        if (leftCount === 1 || rightCount === 1) {
            return 2;
        }        
    }

    if (tree(root) === 0) {
        count ++;
    }
    return count;
};