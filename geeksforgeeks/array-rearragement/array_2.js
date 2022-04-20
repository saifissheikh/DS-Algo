// Write a program to reverse an array or string
 
// Given an array (or string), the task is to reverse the array/string.

function revArray(arr) {
    return arr.reverse();
}

// other approach

function revArray2(arr) {
    let start = 0;
    let end = arr.length - 1;
    while(start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = arr[temp];
        start++;
        end--;
    }
    return arr;
}

console.log(revArray2([1, 2, 3, 4, 5]));