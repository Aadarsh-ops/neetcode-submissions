class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let mp = new Map();
        for( let i=0;i<numbers.length;i++){
            let w = target - numbers[i];
            if(mp.has(w)){
                return [mp.get(w),i+1];
            }
            mp.set(numbers[i],i+ 1)
        }
        return [];
    }
}
