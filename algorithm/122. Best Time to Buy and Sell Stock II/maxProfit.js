/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res = 0;
    let min = prices[0];
    for (let i = 1 , len = prices.length ; i < len ; i ++) {
         if (prices[i] < prices[i-1]) {
              res += (prices[i-1] - min);
              min = prices[i];
         } else {
              if (i === prices.length - 1) {
                   res += (prices[i] - min);
              }
         }
    }
    return res;
};