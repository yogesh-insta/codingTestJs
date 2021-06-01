/**
 * Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each the array element between two given indices, inclusive.
 * Once all operations have been performed, return the maximum value in the array.
 */

const arrayManipulation = (n, queries) => {
    const result = [];
    let max = 0;
    queries.forEach(query => {
        const [a, b, k] = query;
        result[a] = (result[a] || 0) + k;
        result[b + 1] = (result[b + 1] || 0) - k;
    })
    for (let i = 1; i < n + 1; i++) {
        result[i] = (result[i] || 0) + (result[i - 1] || 0);
        max = Math.max(result[i], max);
    }
    return max;
}

console.info(arrayManipulation(100, [[1, 5, 3], [4, 8, 7], [6, 9, 1]]));