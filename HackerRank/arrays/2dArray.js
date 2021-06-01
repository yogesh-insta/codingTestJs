const hourglass = (a) => {
    const result = [];
    let max;
    for (let i = 0; i < 4; i++) {
        let sums = [];
        result.push(sums);for (let j = 0; j < 4; j++) {
            let total = a[i][j] + a[i][j + 1] + a[i][j + 2]
                + a[i + 1][j + 1]
                + a[i + 2][j] + a[i + 2][j + 1] + a[i + 2][j + 2];
            sums.push(total);
            max === undefined ? max = total : null;
            max = Math.max(max, total);
        }
    }
    return max;
}

console.info(hourglass([[-1, 1, -1, 0, 0, 0], [0, -1, 0, 0, 0, 0], [-1, -1, -1, 0, 0, 0], [0, -9, 2, -4, -4, 0], [-7, 0, 0, -2, 0, 0], [0, 0, -1, -2, -4, 0]]));