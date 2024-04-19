# 74. Search a 2D Matrix

二维数组是有序的，也就是可以将二维数组拉平成一维数组，来计算

数组整体长度就是 len = m * n - 1, 每个点下标就是 matrx[parseInt(len/n)][len%n]