# 47. Permutations II

跟46全排列类似，比46多了个重复的数字，为了去重，在46的解决方案上，先排序，再加个与上一个数字判断，如果跟上一个数字一致，且上一个数字并没有访问过，可以跳过该数字。