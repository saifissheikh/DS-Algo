// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    for(let i = 0; i < n; i++) {
        var str = '';
        var space = ' ';
        for(let j = 0; j < i+1; j++) {
            str = str + '#';
        }
        for(let k = i+1; k < n; k++) {
            str = str + space;
        }
        console.log(str);
    }
}

module.exports = steps;
