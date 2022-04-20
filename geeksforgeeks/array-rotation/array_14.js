// Queries on Left and Right Circular shift on array

// Given an array A of N integers. There are three type of type of commands:

function query(arr, type, k) {
    if(type == 'left') {
        rotateLeft(arr, k);
    }
    else if(type == 'right') {
        rotateRight(arr, k);
    }
    else {
        console.log(arr);
    }
    return arr;
}

function rotateLeft(arr, k) {
    for(let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
}

function rotateRight(arr, k) {
    for(let i = 0; i < k; i++) {
        arr.push(arr.shift());
    }
}

console.log(query([1, 3, 4, 5], 'left', 2));
