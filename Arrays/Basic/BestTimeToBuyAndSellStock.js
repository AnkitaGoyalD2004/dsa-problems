// 121. Best Time to Buy and Sell Stock
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0];
    let maxProfit = 0;
    for (i = 1; i < prices.length ; i++){
        buy = Math.min(buy , prices[i]);
        maxProfit = Math.max(maxProfit , (prices[i] - buy) )
    }
    return maxProfit;
};