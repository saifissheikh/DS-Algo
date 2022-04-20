// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    if(n == 0) return 0;
    if(n == 1 || n == 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

// function fib(n) {
//     let n1 = 0, n2 = 1, n3;
//     if(n == 0) return n1;
//     if(n == 1 || n == 2) return n2;
//     for(let i = 2; i <= n; i++) {
//         n3 = n1 + n2;
//         n1 = n2;
//         n2 = n3;
//     }
    
//     return n3;
// }

module.exports = fib;
