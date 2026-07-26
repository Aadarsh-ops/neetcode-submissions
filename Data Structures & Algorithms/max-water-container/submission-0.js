class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
    let maxWater = 0;
    let l=0;
    let r = heights.length - 1;
    while(l<r){
    let water= (r-l) * Math.min(heights[l] , heights[r]);
    maxWater = Math.max(water,maxWater);
    if(heights[l] < heights[r]){
        l++;
    }else{
        r--;
    }
    }
    return maxWater;
    }
}
