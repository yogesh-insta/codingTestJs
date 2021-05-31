const findChar = (s1, s2) => {
    let result = 'NO';
    for (let i = 0; i < s1.length; i++) {
        if (s2.indexOf(s1[i]) > -1) {
            {
                result = 'YES'
                break;
            }
        }
    }
    return result;
}

console.info(findChar('hello', 'world'));
console.info(findChar('aardvark', 'apple'));