#5. Longest Palindromic Substring

寻找字符串最长回文子串。

回文字符串特点是如果s[i]是中心，s[i-1] === s[i+1]
利用这个特点可以遍历字符串寻找最长回文，时间复杂度为O(n的平方)

需要注意的是奇数回文和偶数回文，判断下标不一样