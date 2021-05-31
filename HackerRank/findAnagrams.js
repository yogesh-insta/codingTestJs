/**
 * Sherlock and Anagrams
 *
 *  find all possible substrings and keep then sorted
 *  find all unique pairs of substrings that are equal
 *
 */


const findAllSubStrings = require('./findAllSubStrings');

const findAnagrams = (str) => {
    const p = findAllSubStrings(str);
    let result = 0;
    for (let i = 0; i < p.length; i++) {
        for (let j = i+1; j < p.length; j++) { // avoid duplicate pairs
            if (i !== j) {
                if (p[i] === p[j]) {
                    result++;
                }
            }
        }
    }
    return result;
}

console.info(findAnagrams('cdcd')); // 5
console.info(findAnagrams('ifailuhkqq')); // 3
console.info(findAnagrams('kkkk')); // 10
