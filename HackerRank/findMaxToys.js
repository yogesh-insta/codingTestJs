/**
 *
 * Given a list of toy prices and an amount to spend, determine the maximum number of gifts he can buy.
 */

const mergeSort = require("../SortingAlgos/mergeSort");

function maximumToys(prices, k) {
    const array = mergeSort(prices);
    let i = 0;
    let total = 0;
    while (true){
        if((total + array[i]) < k) {
            total = total + array[i];
            i++;
        }else {
            break;
        }
    }
    return i;
}

console.info(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50));