function sameFrequency(one, two) {
    if(one.length !== two.length) return false;
    let charsInOne = {};
    let charsInTwo = {};
    for(let char of one) {
        charsInOne[char] = (charsInOne[char] || 0) + 1;
    }
    for(let char of two) {
        charsInTwo[char] = (charsInTwo[char] || 0) + 1;
    }
    for(let key in charsInOne) {
        if(charsInOne[key] !== charsInTwo[key])
            return false;
    }
    return true;
}

console.log(sameFrequency('182', '281'));
console.log(sameFrequency('34', '28'));