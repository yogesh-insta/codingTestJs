//Given a and b, determine their respective comparison points.
function compareTriplets(a, b) {
    const result = [0, 0];
    a.forEach((v, index) => {
        v !== b[index] ? v > b[index] ? result[0]++ : result[1]++ : null;
    })
    return result;
}

console.log(compareTriplets([1, 4, 5], [3, 2, 2]));