class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const freq = new  Map();

        for(let num of nums){
            if(freq.get(num) == 1) return true;
            freq.set(num , (freq.get(num) || 0) + 1);
        }
        return false;
    }
}
