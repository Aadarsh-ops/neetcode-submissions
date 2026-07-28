class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        let count = 1;
        let maxCount = 1;
        nums = nums.sort((a, b) => a - b);
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] == nums[i + 1]) {
                continue;
            } else if (nums[i] + 1 == nums[i + 1]) {
                count++;
            } else {
                count = 1;
            }
            maxCount = Math.max(maxCount, count);
        }
        return maxCount;
    }
}


