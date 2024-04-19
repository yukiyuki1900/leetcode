# 1288. Remove Covered Intervals

首先对左端点从小到大排序，数组从左到右左端点依次增加。只要判断右端点即可决定区间是否被包含。

对于左端点相同的区间，右端点从大到小排序，这样在数组从0遍历的时候，只要保存当前最大的右端点，只要当前右端点小于最大的右端点，肯定左端点小于等于之前出现的所有区间，也就是被覆盖状态。