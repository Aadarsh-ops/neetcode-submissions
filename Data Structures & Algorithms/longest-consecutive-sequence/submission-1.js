class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let count = 1;
        let maxCount =1;
        if(nums.length == 0) return 0;
       nums.sort((a,b) => (a-b));
       for(let i=0;i<nums.length-1;i++){
          if(nums[i] === nums[i+1]){
            
          }else if(nums[i] + 1 === nums[i+1]){
            count++;
          }else{
            maxCount = Math.max(count,maxCount);
            count =1;
          }
       }
       return Math.max(count,maxCount);
    }
}
