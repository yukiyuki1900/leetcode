#122. Best Time to Buy and Sell Stock II

要获得最高的收益，那就是每个上涨的区间都能准确买入卖出。

如果上涨趋势，不需要操作；在下跌的时候（也就是prices[i] < prices[i-1]），说明此时prices[i-1]是最高值，(prices[i-1] - min) 的值即为此上升区间的获利。

另外由于下跌的时候才会触发获利取值，数组结束的时候还需要再多计算一次，防止最后有个上升的区间没有被计算进去