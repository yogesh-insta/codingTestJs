/**
 * Bubble Sort
 * О(n2) - n square
 * Repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order
 */

const sort = (array) => {
    if (!array || !Array.isArray(array)) {
        throw new Error('invalid array')
    }
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                count++;
                swap(array, i, j);
            }
        }
    }
    console.info(`Array is sorted in ${count} swaps.`);
    console.info(`First Element: ${array[0]}`);
    console.info(`Last Element: ${array[array.length - 1]}`);
    return array;
}

const swap = (array, i, j) => {
    let temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}

console.info(sort([1, 2, 3]))
