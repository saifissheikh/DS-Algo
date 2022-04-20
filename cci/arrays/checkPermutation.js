// Brute Force
// function checkPermutation(one, two) {
//     if(one.length !== two.length) 
//         return false;
//     let str1 = {};
//     let str2 = {};
    
//     for(let i = 0; i < one.length; i++) {
//         str1[one[i]] = str1[one[i]] ? str1[one[i]] + 1 : 1;
//     }

//     for(let i = 0; i < two.length; i++) {
//         str2[two[i]] = str2[two[i]] ? str2[two[i]] + 1 : 1;
//     }

//     for(let char in str1) {
//         if(str1[char] !== str2[char])
//             return false;
//     }
//     return true;
// }

// Optimized

function checkPermutation(one, two) {
    if(one.length !== two.length)
        return false;
    let str1 = {};
    let str2 = {};
    
    for(let i = 0; i < one.length; i++) {
        str1[one[i]] = str1[one[i]] ? str1[one[i]] + 1 : 1;
        str2[two[i]] = str2[two[i]] ? str2[two[i]] + 1 : 1;
    }
    
    for(let char in str1) {
        if(str1[char] !== str2[char])
            return false;
    }
    return true;
}

// other approach

function checkPerm(one, two) {
    if(one.length !== two.length)
        return false;
    let str1 = one.split('').sort().join();
    let str2 = two.split('').sort().join();
    if(str1 !== str2)
        return false;
    return true;
}

console.log(checkPerm('aabcc', 'cbcaa'));