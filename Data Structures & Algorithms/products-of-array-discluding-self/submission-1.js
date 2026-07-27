class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
       let n  = nums.length;
       let s =  new Array(n);
       let e = new Array(n);
       let r  = new Array(n);
    s[0] =1;
    e[n-1] = 1;

    for(let i=1;i<n;i++){
        s[i] = nums[i-1] * s[i-1]; 
    }
    for(let i=n-2;i>=0;i--){
        e[i] = nums[i+1] * e[i+1]; 
    }
    for(let i=0;i<n;i++){
        r[i] = s[i] * e[i]
    }

    return r;

    }
}
