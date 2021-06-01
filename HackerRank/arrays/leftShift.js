/**
 * Given an array a of n integers and a number, d, perform d left rotations on the array.
 * Return the updated array to be printed as a single line of space-separated integers.
 * https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 */

function rotLeft(a, d) {
    const partialArr = a.splice(d, a.length);
    const result = partialArr.concat(a);
    return result;
}

console.info(rotLeft([1, 2, 3, 4, 5], 3));