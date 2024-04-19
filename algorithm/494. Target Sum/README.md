# 494. Target Sum

这道题实际上是找出数组某些集合相加等于(sum(nums)+S)/2

公式计算：
* 假设存在数组nums=[1,2,3,4,5],S=3,那存在 2+3+4-1-5=3, 那可分为P=[2,3,4],N=[1,5]
* sum(P) - sum(N) = S
* sum(P) - sum(N) + sum(P) + sum(N) = S + sum(P) + sum(N)
* 2 * sum(P) = S + sum(nums)
* sum(P) = (S + sum(nums)) / 2

相当于找出sum(P) 的集合 
dp[j] 表示集合元素相加的值等于j的方案个数，dp[j] = dp[j] + dp[j-we]