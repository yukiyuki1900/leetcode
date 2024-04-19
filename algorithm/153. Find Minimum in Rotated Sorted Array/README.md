# 153. Find Minimum in Rotated Sorted Array

在旋转数组里寻找最小值，以二分查找的方式，总有一部分是上升的

需要注意的是，left = mid + 1， 原因便是num[mid + 1]的值有可能比num[mid]大，也有可能就是所要寻找的最小值，不管是哪个，都在搜索范围内；

但是 right = mid，而不是right = mid - 1；原因是nums[mid]有可能为最小值