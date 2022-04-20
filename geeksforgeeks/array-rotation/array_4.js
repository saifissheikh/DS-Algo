// Program to cyclically rotate an array by one

function rotate(arr) {
    let temp = arr.pop()
    arr.unshift(temp);
    return arr;
}

console.log(rotate([1, 2, 3, 4]));