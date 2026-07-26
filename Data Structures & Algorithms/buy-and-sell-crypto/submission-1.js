class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
    let l=0;
    let r=1;
    let maxProfit = 0
    while(r< prices.length){
        if(prices[r] > prices[l]){
            maxProfit= Math.max(maxProfit,prices[r] - prices[l])
        }else{
            l = r
        }
        r++;
    }
    return maxProfit;
    
    }
}
