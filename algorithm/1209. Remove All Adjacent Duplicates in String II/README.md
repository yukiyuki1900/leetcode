# 1209. Remove All Adjacent Duplicates in String II

删掉重复的k个字母，遍历字符串，加一个count数组计算每个字母出现的次数

1. 当前字母与上一个字母不一致，count[i] = 1; 
2. 当前字母与上一个字母一致，count[i] = count[i-1] + 1;
3. count[i] === k, 删除字符串中 i-k 到 i 的字母，同时 i = i - k;
