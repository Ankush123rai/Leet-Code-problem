var longestCommonPrefix = function(strs) {
    let prefix = '';
    if (strs.length === 1) return strs[0];
    for (let i = 0; i < strs.length; i++) {
        let currentChar = strs[0][i];
         console.log(currentChar)
        if (currentChar && strs.every((s) => s[i] == currentChar)) {
            prefix += currentChar;
        } else {
            return prefix;
        }
    }
    
    return prefix;
};
const x=longestCommonPrefix(["flower","flow","flight"])
console.log(x)