class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

       const mp = new Map();
       for(let i=0;i<nums.length;i++){
        if(mp.has(nums[i])){
            return [mp.get(nums[i]),i];
        }
        mp.set(target-nums[i],i);
       }
       return [];
    }
}
