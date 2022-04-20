function checkInitial(str) {
    let lookup = {};
    for(let char of str)
        lookup[char] = lookup[char] + 1 || 1;

    return (lookup.U === lookup.D && lookup.L === lookup.R);
}

console.log(checkInitial('UUDRDL'));