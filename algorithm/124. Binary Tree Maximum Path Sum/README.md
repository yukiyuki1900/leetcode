#124. Binary Tree Maximum Path Sum

这道题难点在于将最大值转化为每个节点的左子节点最大值 + 当前节点 + 右子节点最大值，和当前最大值对比取最大值。

还有一个需要注意就是，极端情况下单独一个节点也可以作为最大值。所以递归公式就是

设maxLeftValue为左子节点最大值，maxRightValue右子节点最大值
max = Math.max(max, node.val, node.val + maxLeftValue, node.val + maxRightValue, node.val + maxLeftValue + maxRightValue );

而每个节点的最大值公式为
maxNodeValue = Math.max(node.val, node.val + maxLeftValue, node.val + maxRightValue);