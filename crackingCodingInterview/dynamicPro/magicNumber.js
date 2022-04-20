// brute Force

function magicNumber(arr) {
    for(let i = 0; i < arr.length; i++)
        if(arr[i] === i)
            return i;
    return false;
}

function binarySearch(arr) {
    let low = 0;
    let high = arr.length - 1;
    let mid;
    while(low <= high) {
        mid = Math.floor((low + high)/2);
        if(mid === arr[mid]) return mid;
        else if(arr[mid] > mid)
            high = mid - 1;
        else
            low = mid + 1;
    }
    return false;
}

console.log(binarySearch([-5, -1, 0, 3]));