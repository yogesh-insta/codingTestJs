/**
 You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates.
 You are allowed to swap any two elements. Find the minimum number of swaps required to sort the array in ascending order.
 https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 */

const minSwaps = (array) => {
    let swaps = 0;
    const lookup = {};
    for (let i = 0; i < array.length; i++) {
        lookup[array[i]] = i;
    }
    for (let j = 0; j < array.length; j++) {
        if (array[j] !== j + 1) {
            let i = lookup[j + 1];
            swaps++;
            // swap the current number with the right one, swap a[j] with a[i]
            // and update lookup index for the number being shifted
            let temp = array[j];
            array[j] = j + 1
            array[i] = temp;
            lookup[temp] = i;
        }
    }
    return swaps;
}

console.info(minSwaps([7, 1, 3, 2, 4, 5, 6])); //5