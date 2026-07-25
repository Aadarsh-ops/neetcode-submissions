class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

          const v = new Map();

    for (let i = 0; i < nums.length; i++) {
            if(v.has(nums[i])){
            return [v.get(nums[i]) , i]
        }else{
            v.set(target - nums[i],i)
        }
    }
    }
}
