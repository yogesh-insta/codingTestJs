/**
 * Sherlock and Anagrams
 *
 *  find all possible substrings and keep then sorted
 *  find all unique pairs of substrings that are equal
 *
 */

const findAnagrams = (str) => {
    let result = 0;
    const possibilities = {};
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            let str1 = [...(str.slice(i, j))].sort().join('');
            if (str1 in possibilities) {
                result += possibilities[str1];
            }
            possibilities[str1] ? possibilities[str1] += 1 : possibilities[str1] = 1;
        }
    }
    return result;
}

console.info(findAnagrams('cdcd')); // 5
console.info(findAnagrams('ifailuhkqq')); // 3
console.info(findAnagrams('kkkk')); // 10
