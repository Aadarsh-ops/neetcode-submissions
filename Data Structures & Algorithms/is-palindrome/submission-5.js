class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let ss = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
        let  i=0;
        let j=ss.length-1;
 
       while(i<j){
        if (ss[i] != ss[j]) return false;
        i++;
        j--;
       }
       return true;
    }
}
