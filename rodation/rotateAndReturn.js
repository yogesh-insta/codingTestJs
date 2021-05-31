//For each array, perform a number of right circular rotations and return the values of the elements at the given indices.

function rotate(array, k, queries) {
    k = k % array.length;
    const sliceIndex = array.length - k;
    const res = [...array.slice(sliceIndex), ...array.slice(0, sliceIndex)];
    return queries.map(i => res[i]);
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 2, [1]))