#48. Rotate Image

方法一：翻转数组
先以对角线互换，再以中轴线互换


方法二：每层旋转
可以把二位数组想象成一个个圈，从外围往里旋转，确认一个点后，可以确认四个角的下标，分别替换即可
若数组长度为偶数，旋转圈数为n/2；若长度为奇数，旋转圈数为(n-1)/2，因为中间一个点不需要旋转