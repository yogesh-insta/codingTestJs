

const findWord = (magazine, note) => {
    let result;
    for (let i =0; i < note.length; i++) {
        const index = magazine.findIndex( w2 => note[i] === w2)
        if(index === -1){
            result =  'No';
            break;
        } else {
           magazine.splice(index, 1); // delete the words once found to avoid repeated use
        }
    }
    console.info(result? result: 'Yes' );
}

findWord(['give', 'me', 'one', 'grand', 'today', 'night'], ['give', 'one', 'grand','today'])
findWord(['give', 'me', 'grand', 'today', 'night'], ['give', 'one', 'grand','today'])
findWord(['two', 'times', 'three', 'is', 'not', 'four'], ['two', 'times', 'two', 'is', 'four'])