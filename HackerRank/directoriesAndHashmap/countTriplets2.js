const solve = (nums, ratio) => {
    const numCounts = {}
    const pairCounts = {}
    let count = 0

    for (let i = nums.length - 1; i >= 0; i--) {
        const [val, nextVal] = [nums[i], nums[i] * ratio]

        if (nextVal in pairCounts) {
            count += pairCounts[nextVal]
        }

        if (nextVal in numCounts) {
            pairCounts[val] = (pairCounts[val] || 0) + numCounts[nextVal]
        }

        numCounts[val] = (numCounts[val] || 0) + 1
    }

    return count
}

console.info(solve([1, 2, 2, 4], 2))//2
console.info(solve([1, 3, 9, 9, 27, 81,], 3))//6