/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let res = 0;
    for (let i = 0 , len = prices.length ; i < len ; i ++) {
        if (prices[i] - min > res) {
            res = prices[i] - min;
        }
        if (min > prices[i]) {
            min = prices[i];
        }
    }

    return res;
};