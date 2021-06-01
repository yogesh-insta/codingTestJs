/**
 Given two strings, determine if they share a common substring. A substring may be as small as one character.
 */

const findCommonSubstrings = (s1, s2) => {
    let result = 'NO';
    for (let i = 0; i < s1.length; i++) {
        if (s2.indexOf(s1[i]) > -1) {
            {
                result = 'YES'
                break;
            }
        }
    }
    return result;
}

console.info(findCommonSubstrings('hello', 'world'));
console.info(findCommonSubstrings('aardvark', 'apple'));