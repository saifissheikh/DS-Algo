// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    str = str.split('');
    let space = ' ';
    str[0] = str[0].toUpperCase();
    for(let i = 0; i < str.length; i++) {
        if(str[i] === space)
           str[i+1] = str[i+1].toUpperCase();
    }
    return str.join('');
}

module.exports = capitalize;
