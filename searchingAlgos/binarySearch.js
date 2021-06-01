/**
 *
 * Binary search compares the target value to the middle element of the array
 *
 */


const search = (array, element) => {
    if (!array || !Array.isArray(array)) {
        throw new Error('invalid array')
    }
    let low = 0, high = array.length, result;
    while (result === undefined) {
        let m = Math.floor(low + (high - low) / 2);
        array[m] === element ? result = m : array[m] < element ? low = m + 1 : high = m - 1;
    }
    return result;
}


console.info(search([2, 3, 4, 5, 6], 6));

console.info(search([1, 2, 3, 4, 5, 6, 9, 10], 3));