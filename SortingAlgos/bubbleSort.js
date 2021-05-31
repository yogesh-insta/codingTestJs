/**
 * Bubble Sort
 * О(n2) - n square
 * Repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order
 */

const sort = (array) => {
    if (!array || !Array.isArray(array)) {
        throw new Error('invalid array')
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] < array[j]) {
                swap(array, i, j);
            }
        }
    }
    return array;
}

const swap = (array, i, j) => {
    let temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}

console.info(sort([3, 4, 2, 6, 5]))
console.info(sort([2, 1, 3, 9, 6]))