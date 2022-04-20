function checkPerm(str) {
    let lookup = {};
    str = str.toLowerCase().replace(/[^\w]/gi, '');
    for(let char of str)
        lookup[char] = lookup[char] + 1 || 1;

    let oneEven = false;

    for(let char in lookup) {
        if(oneEven) return false;
        if(lookup[char] % 2 !== 0)
            oneEven = true;
    }

    return true;
}

console.log(checkPerm('!tact coa aa'));