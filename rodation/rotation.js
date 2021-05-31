//cyclic rotation - rotate numbers in an array by given number
function rotate(A, K) {
    K = K % A.length;
    const sliceIndex = A.length - K;
    return [...A.slice(sliceIndex), ...A.slice(0, sliceIndex)]
}

console.log(rotate([1,2,3,4,5,6,7], 3));

