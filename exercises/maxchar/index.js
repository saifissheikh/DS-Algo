// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let map = {};
    let max = 0;
    let maxChar = '';
    for(let i = 0; i < str.length; i++) {
        map[str[i]] = map[str[i]] ? map[str[i]] + 1 : 1;
    }
    for(let char in map) {
        if(map[char] > max) {
            max = map[char];
            maxChar = char;
        }
    }
    return maxChar;
}

console.log(maxChar('aabcbacccccdddddd'));

module.exports = maxChar;
