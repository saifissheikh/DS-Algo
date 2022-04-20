function URLify(str) {
    str = str.split('');
    let space = ' ';
    let temp = '%20';
    for(let i = 0; i < str.length; i++) {
        if(str[i] === space)
            str[i] = temp;
    }
    return str.join('');
}

console.log(urlify('Hello there! How are you doing ?'));