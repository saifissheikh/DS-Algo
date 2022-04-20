// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase();
    let aMap = {};
    let bMap = {};
    for(let str of stringA)
        aMap[str] = aMap[str] ? aMap[str] + 1 : aMap[str];
    for(let str of stringB)
        bMap[str] = bMap[str] ? bMap[str] + 1 : bMap[str];

    if(Object.keys(aMap).length !== Object.keys(bMap).length)
        return false;
    
    for(let char in bMap) {
        if(aMap[char] !== bMap[char])
            return false;
    }

    return true;
}

module.exports = anagrams;
