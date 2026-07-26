class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        const map = new Map();

        for(let i=0;i<numbers.length;i++){
            let w = target - numbers[i];
            if(map.has(w)){
              return [map.get(w), i+ 1];
            }
                map.set(numbers[i],i +1);
            
        }
        return [];
        
    }
}
