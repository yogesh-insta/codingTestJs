const findWord = (magazine, note) => {
    let result;
    const magazineMap = {};
    for (let i = 0; i < magazine.length; i++) {
        magazineMap[magazine[i]] = magazineMap[magazine[i]] ? magazineMap[magazine[i]] + 1 : 1
    }
    for (let i = 0; i < note.length; i++) {
        if (magazineMap[note[i]] > 0) {
            magazineMap[note[i]] -= 1;
        } else {
            result = 'No';
            break;
        }
    }
    console.info(result ? result : 'Yes');
}

findWord(['give', 'me', 'one', 'grand', 'today', 'night'], ['give', 'one', 'grand', 'today'])
findWord(['give', 'me', 'grand', 'today', 'night'], ['give', 'one', 'grand', 'today'])
findWord(['two', 'times', 'three', 'is', 'not', 'four'], ['two', 'times', 'two', 'is', 'four'])