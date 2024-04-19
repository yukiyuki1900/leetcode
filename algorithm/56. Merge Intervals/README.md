# 56. Merge Intervals

只要转化为动态规划的公式即可
因为最大和数组是连续的，假设值f(i) 为终点为i的最大的和，那么f(i) = Math.max(f(i-1) + nums[i], nums[i])