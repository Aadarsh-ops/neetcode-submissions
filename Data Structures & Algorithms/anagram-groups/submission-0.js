class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
      const res = {};
     for(let s of strs){
        const ss= s.split('').sort().join();
          if(!res[ss]) {
            res[ss] = [];
          }
          res[ss].push(s);
    }
    return Object.values(res);
    }
     
     

}
