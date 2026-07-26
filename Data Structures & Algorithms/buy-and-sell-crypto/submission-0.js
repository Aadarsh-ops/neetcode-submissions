class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
       for(let i=0;i<prices.length-1;i++){
        let buy= prices[i];
        let l = i+1;
        while(l<prices.length){
              let profit = prices[l]  - buy;
              maxProfit = Math.max(profit, maxProfit);

            l++;
        }
       }
       return maxProfit;
    }
}
