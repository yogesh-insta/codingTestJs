const freqQuery = (queries) => {
    const result = {};
    const freq = {}
    const outcome = [];
    queries.forEach(q => {
        switch (q[0]) {
            case 1:
                removeFromSet(freq, result, q[1]);
                result[q[1]] = result[q[1]] ? result[q[1]] += 1 : 1;
                addToSet(freq, result, q[1]);
                break;
            case 2:
                removeFromSet(freq, result, q[1]);
                result[q[1]] = result[q[1]] ? result[q[1]] -= 1 : 0;
                addToSet(freq, result, q[1]);
                break
            case 3:
                (freq[q[1]] && freq[q[1]].size > 0) ? outcome.push(1) : outcome.push(0);
                break;
        }
    })
    return outcome;
}

const removeFromSet = (freq, result, v) => {
    if(!result[v]) return
    if (freq[result[v]]) {
        freq[result[v]].delete(v);
    }
}

const addToSet = (freq, result, v) => {
    if(!result[v]) return
    if (!freq[result[v]]) {
        freq[result[v]] = new Set();
    }
    freq[result[v]].add(v);
}

const input = [[1, 100021], [3, 3], [1, 100043], [1, 100062], [1, 100089], [1, 100007], [2, 3], [3, 4], [3, 3], [3, 4], [2, 5], [1, 100092], [3, 5], [2, 1], [3, 1], [1, 100091], [1, 100053], [1, 100044], [2, 2], [3, 3], [1, 100063], [1, 100068], [2, 3], [1, 100084], [2, 2], [1, 100004], [2, 1], [3, 5], [2, 5], [3, 3], [1, 100077], [1, 100080], [3, 1], [1, 100020], [1, 100093], [3, 1], [2, 3], [3, 2], [3, 4], [2, 5], [2, 5], [2, 5], [3, 2], [3, 4], [3, 5], [2, 2], [3, 2], [3, 2], [1, 100056], [3, 3], [2, 4], [1, 100070], [3, 5], [3, 3], [3, 3], [3, 1], [1, 100038], [1, 100026], [2, 5], [3, 2], [1, 100043], [2, 2], [3, 3], [1, 100080], [1, 100073], [2, 2], [1, 100005], [2, 5], [1, 100078], [1, 100085], [1, 100070], [1, 100077], [2, 1], [3, 3], [3, 3], [1, 100056], [3, 1], [3, 4], [3, 4], [3, 1], [3, 1], [2, 5], [1, 100021], [3, 1], [2, 2], [3, 5], [2, 3], [3, 2], [1, 100050], [1, 100098], [3, 3], [2, 5], [3, 1], [3, 1], [3, 1], [3, 5], [1, 100007], [3, 3], [3, 4], [2, 5]]

//console.log(freqQuery([[1, 5], [1, 6], [1, 6], [1, 10], [1, 10], [1, 6], [2, 5], [3, 2]]));
//console.log(freqQuery([[1,100021],[3, 3],[1, 100043],[1, 100062],[1, 100089]]));
console.log(freqQuery(input));
