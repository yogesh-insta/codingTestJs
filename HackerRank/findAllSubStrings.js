const findAllSubStrings = (str) => {
    const possibilities = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            possibilities.push([...(str.slice(i, j))].sort().join('')); //sort string alphabetically
        }
    }
    return possibilities;
}

module.exports = findAllSubStrings;