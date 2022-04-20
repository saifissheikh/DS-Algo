// Brute Force
// function isUnique(str) {
//     let unq = {};
//     for(let i = 0; i < str.length; i++) {
//         unq[str[i]] = unq[str[i]] ? unq[str[i]] + 1 : 1;
//     }

//     for(let char in unq) {
//         if(unq[char] > 1)
//             return false;
//     }
//     return true;
// }

// Optimized
function isUnique(str) {
    let unq = {};
    let limit = 1;
    for(let i = 0; i < str.length; i++) {
        unq[str[i]] = unq[str[i]] ? unq[str[i]] + 1 : 1  
        if(unq[str[i]] > limit)
            return false; 
    }
    return true;
}

console.log(isUnique('abcdef'));