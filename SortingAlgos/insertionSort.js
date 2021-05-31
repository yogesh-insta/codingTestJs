/**
 * At each iteration, insertion sort removes one element from the input data,
 * finds the location it belongs within the sorted list, and inserts it there.
 */


const sort = (array) => {
    if (!array || !Array.isArray(array)) {
        throw new Error('invalid array')
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            if (array[i] < array[j]) {
                swap(array, i, j)
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