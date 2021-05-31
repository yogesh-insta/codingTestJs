/**
 * The smallest element is selected from the unsorted array and swapped with the leftmost element,
 * and that element becomes a part of the sorted array.
 */

const sort = (array) => {
    if (!array || !Array.isArray(array)) {
        throw new Error('invalid array')
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[i] > array[j]){
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
console.info