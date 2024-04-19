#236. Lowest Common Ancestor of a Binary Tree

二叉树上查询两个节点的最小父节点

方法一：
两次遍历储存父节点，因为遍历是由下往上遍历，所以遇到的第一个共同父节点为最小父节点


方法二：

假设两个查询节点为 p 和 q ，当前遍历节点为curNode，当前节点的左节点为leftNode，当前节点的右节点为rightNode

使用递归，最小父节点满足的条件  (dfs(leftNode) && dfs(rightNode)) || (dfs(leftNode) || dfs(rightNode) && (p.val === curNode.val || q.val === curNode.val))