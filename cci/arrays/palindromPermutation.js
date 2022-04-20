// Check if one of permutations of a string is a palindrome of that string.
function palinPerm(str) {
    if(str === str.split('').reverse().join(''))
        return true;
    let charMap = {};
    let oddCount = 0;
    for(let i of str) {
        charMap[i] = charMap[i] ? charMap[i] + 1 : 1;
    }
    for(let char in charMap) {
        if(charMap[char] % 2 !== 0)
            oddCount++
        if(oddCount > 1)
            return false;
    }
    return true;
}

console.log(palinPerm('aabcbasdsdfdfgdc'));