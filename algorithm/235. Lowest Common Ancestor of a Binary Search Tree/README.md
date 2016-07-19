#235. Lowest Common Ancestor of a Binary Search Tree


二叉查找树上查询两个节点的最小父节点

根据二叉查找树的特点，最小父节点肯定是介于两个节点值中间，做递归查询处于中间值得父节点即可，判断条件：
(root.val-p.val)*(root.val-q.val) <=0 即可

另：
如不利用二叉查找树的特点，则对二叉树进行dfs分别记录查找两个节点的路径。两个路径最后一个相同父节点即为最小父节点