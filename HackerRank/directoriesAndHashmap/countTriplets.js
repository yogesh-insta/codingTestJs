const findTriplets = (arr, r) => {
    const p = [];
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if((arr[i] * r) === arr[j] && (arr[j] * r) === arr[k]){
                    p.push([arr[i], arr[j], arr[k]]);
                    total++;
                }
            }
        }
    }
    console.log(p);
    return total;
}

console.info(findTriplets([1, 2, 2, 4], 2))//2
console.info(findTriplets([1, 3, 9, 9, 27, 81,], 3))//6