const solve = (array, ratio) => {
    const numberCount = {}, pairCount = {};
    let count = 0;
    array.forEach( val => {
        const prevValue = val / ratio;
        prevValue in pairCount? count += pairCount[prevValue]:null;
        prevValue in numberCount? pairCount[val] = (pairCount[val] || 0) + numberCount[prevValue]:null
        numberCount[val] = (numberCount[val] || 0) + 1;
    })
    return count;
}

console.info(solve([1, 2, 2, 4], 2))//2
console.info(solve([1, 3, 9, 9, 27, 81,], 3))//6