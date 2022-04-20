// Rearrange array such that arr[i] >= arr[j] if i is even and arr[i]<=arr[j] if i is odd and j < i

// Given an array of n elements. Our task is to write a program to rearrange the array such that elements at even positions are greater than all elements before it and elements at odd positions are less than all elements before it.

function rearrange(arr) {
    let temp = [];
    let evenPos = Math.floor(arr.length/2);
    let oddPos = arr.length - evenPos;
    let j = oddPos - 1;
    temp.push(...arr);
    temp.sort((a, b) => a - b);

    for(let i = 0; i < arr.length; i+=2) {
        arr[i] = temp[j];
        j--;
    }
    j = oddPos;
    for(let i = 1; i < arr.length; i+=2) {
        arr[i] = temp[j];
        j++;
    }

    return arr;
}

console.log(rearrange([1, 2, 1, 4, 5, 6, 8, 8]));

