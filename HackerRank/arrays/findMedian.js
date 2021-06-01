const findMedian = (arr) => {
    let mid = 0;
    if (arr.length % 2 === 0) {
        mid = Math.ceil(arr[arr.length / 2] + arr[(arr.length / 2) + 1]) / 2;
    } else {
        mid = arr[Math.ceil(arr.length / 2)];
    }
    return mid;
}

const insertValue = (array, element) => {
    if (!array || !Array.isArray(array)) {
        throw new Error('invalid array');
    }
    let low = 0, high = array.length, result;
    while (!result) {
        let m = Math.floor(low + (high - low) / 2);
        if (array[m] === element || (array[m] < element && array[m + 1] > element)) {
            result = m
        } else {
            array[m] < element ? low = m + 1 : high = m - 1;
        }
    }
    array.splice()
    return result;
}

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
