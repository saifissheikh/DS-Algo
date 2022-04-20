
let value = 1;
function power(base, exp) {
    if(exp == 0) return value;
    value = value * base;
    return power(base, exp - 1);
}

function factorial(n) {
    if(n == 1) return 1;
    return n * factorial(n - 1);
}

function productArray(n) {
    if(n.length === 0) return 1;
    return n[0] * productArray(n.slice(1));
}

function recursiveRange(x) {
    if(x === 0) return 0;
    return x + recursiveRange(x-1);
}

function reverse(str) {
    if(str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}

function isPalindrome(str) {
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
    return false;
}

const isOdd = val => val % 2 !== 0;

function someRecursive(arr, isOdd) {
    if(arr.length == 1 && !isOdd(arr[0])) return false;
    if(arr.length == 0 || isOdd(arr[0])) return true;
    return someRecursive(arr.slice(1), isOdd);
}

let newArr = []

function flatten(arr) {
    if(arr.length == 0) return newArr;
    if(typeof arr[0] === Array) return flatten(arr[0]);
    if(typeof arr[0] === Number) {
        newArr.push(arr[0]);
        arr.splice(0, 1);
    }
}



console.log(someRecursive([6, 2, 10, 4], isOdd));