// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
function pyramid(n, row = 0, col = 0, stair = '') {
    if(row === n) return;

    if(stair.length === (n * 2) - 1) {
        console.log(stair);
        return pyramid(n, ++row);
    }

    let midpoint = Math.floor((n * 2 - 1)/2);
    let space = ' ';
    if(midpoint - row <= col && midpoint + row >= col)
        stair += '#';
    else
        stair += space;
    pyramid(n, row, ++col, stair);
}

// function pyramid(n) {
//     let space = ' ';
//     const midpoint = Math.floor((n * 2 - 1)/2);
//     for(let row = 0; row < n; row++) {
//         let stair = '';
//         for(let col = 0; col < n * 2 - 1; col++) {
//             if(midpoint - row <= col && midpoint + row >= col)
//                 stair += '#';
//             else
//                 stair += space;
//         }
//         console.log(stair);
//     }
// }

module.exports = pyramid;
