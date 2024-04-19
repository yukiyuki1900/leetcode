#8. String to Integer (atoi)

因为数字是证书，所以简单的方法可以用for遍历和if else判断得到

需要注意的是，需要整数的范围是 -2^31 ~ 2^31-1，而js里的最大值和最小值是超过这个范围的，所以需要还要声明一个最大值Math.pow(2, 31) - 1


另外复习一下js里的最大值和最小值：
由于js是双精度浮点数存储数字的，所以常见的Number.MAX_VALUE 不是整数，是浮点数，而Number.MIN_VALUE不是最小值，是最小正数，同理它也是个浮点数

所以js里最大值和最小值应当为：
最大值：Number.MAX_VALUE
最小值：- Number.MAX_VALUE
正数最小值：Number.MIN_VALUE

安全最大正整数：Number.MAX_SAFE_INTEGER  (2^53 - 1)
安全最大负整数：Number.MIN_SAFE_INTEGER  -(2^53 - 1)

