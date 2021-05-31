/**
 Quick Sort
 О(n log n)
 also called Partition exchange sort.
 It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays
 */

const sort = (array, low, high) => {
    if (!array || !Array.isArray(array)) {
        throw new Error('invalid array')
    }

    if (low < high) {
        const pivotIndex = partition(array, low, high);
        sort(array, low, pivotIndex - 1);
        sort(array, pivotIndex + 1, high);
    }

    return array;
}

const partition = (array, low, high) => {
    // make last value as pivot
    const pivotValue = array[high];
    let i = low;
    // low to high - 1
    for (let j = low; j < high; j++) {
        if (array[j] < pivotValue) {
            swap(array, i, j);
            i++;
        }
    }
    swap(array, i, high);
    return i;
}

const swap = (array, i, j) => {
    let temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}

console.info(sort([3, 4, 2, 6, 5], 0, 4))
console.info(sort([2, 1, 3, 9, 6], 0, 4))