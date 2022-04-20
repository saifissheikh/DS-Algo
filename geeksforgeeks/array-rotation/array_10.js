// Given an array of size n and multiple values around which we need to left rotate the array. How to quickly find multiple left rotations?

// Brute Force

function quickCount(arr, counts) {
    let results = [];
    for(let i = 0; i < counts.length; i++) {
        results.push(rotate(arr, counts[i]));
        arr = newArr;
    }
    return results;
}

function rotate(arr, k) {
    for(let i = 0; i < k; i++) {
        arr.push(arr.shift());
    }
    return arr;
}

// Efficient solution

function leftRotate(arr,n,k) 
{ 
// Print array after 
// k rotations 
for (let i = k; i < k + n; i++) 
console.log(arr[i % n] + " "); 
} 

// Driver Code 
function drive()
{ 
let arr = [1, 3, 5, 7, 9]; 
let n = arr.length; 

let k = 2; 
leftRotate(arr, n, k); 
console.log('\n');

k = 3; 
leftRotate(arr, n, k); 
console.log('\n');

k = 4; 
leftRotate(arr, n, k); 
console.log('\n');  
} 

drive();