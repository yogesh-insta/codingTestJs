/**
 * Merge sort first divides the array into equal halves and then combines them in a sorted manner.
 */

const sort = (array) => {
    if (!array || !Array.isArray(array)) {
        throw new Error('invalid array')
    }
    if (array.length > 1) {
        const m = Math.floor(array.length / 2);
        return merge(sort(array.slice(0, m)), sort(array.slice(m, array.length)));
    }
    return array;
}

const merge = (a1, a2) => {
    let i = 0, j = 0, result = [];
    while (result.length !== (a1.length + a2.length - 1)) {
        a1[i] < a2[j] ? result.push(a1[i++]) : result.push(a2[j++]);
    }
    i < a1.length ? result.push(a1[i]) : result.push(a2[j])
    return result;
}

console.info(sort([3, 4, 2, 6, 5]))
console.info(sort([2, 1, 3, 9, 6]))