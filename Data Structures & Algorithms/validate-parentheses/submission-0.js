class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {  
         const st = [];
        const closeToOpen = {
            ')': '(',
            ']': '[',
            '}': '{',
        };

        for (let c of s) {
            if (closeToOpen[c]) {
                if (
                    st.length > 0 &&
                    st[st.length - 1] === closeToOpen[c]
                ) {
                    st.pop();
                } else {
                    return false;
                }
            } else {
                st.push(c);
            }
        }
        return st.length === 0;
    }
}