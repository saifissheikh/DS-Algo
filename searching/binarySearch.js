function binarySearch(arr, value) {
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start+end)/2);
    while(start <= end) {
        if(arr[mid] == value)
            return mid;
        if(value < arr[mid])
            end = mid - 1;
        else
            start = mid + 1;
        mid = Math.floor((start+end)/2);
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 3));