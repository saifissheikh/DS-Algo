// Print left rotation of array in O(n) time and O(1) space

// Given an array of size n and multiple values around which we need to left rotate the array. How to quickly print multiple left rotations?

function leftRotate(arr, k) {
    let mod = k % arr.length;

    for(let i = 0; i < arr.length; i++) {
        console.log(arr[(i + mod) % arr.length]);
    }
}

function display(arr) {
    leftRotate(arr, 2);
    console.log(' ');
    leftRotate(arr, 3);
    console.log(' ');
    leftRotate(arr, 5);
}

display([1, 2, 3, 5, 6]);