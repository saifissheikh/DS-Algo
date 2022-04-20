// Given a rotated and sorted array, find the key in log n time

function search(arr, key) {
    let pivot = findPivot(arr, 0, arr.length - 1);
    if(pivot == -1)
        return binaySearch(arr, 0, arr.length - 1, key);
    
    if(key == arr[pivot])
        return pivot;
    if(arr[0] <= key)
        return binaySearch(arr, 0, pivot - 1, key);
    return binaySearch(arr, pivot+1, arr.length - 1, key);
}

function findPivot(arr, low, high) {
    if(high < low)
        return - 1;
    if(high == low)
        return low;
    let mid = (low + high)/2;
    if (mid < high && arr[mid] > arr[mid + 1]) 
        return mid; 
    if (mid > low && arr[mid] < arr[mid - 1]) 
        return (mid - 1); 
    if (arr[low] >= arr[mid]) 
        return findPivot(arr, low, mid - 1); 
    return findPivot(arr, mid + 1, high); 
}

function binaySearch(arr, low, high, key) {
    if(high < low)
        return -1;
    let mid = (low + high)/2;
    if(key == arr[mid])
        return mid;
    if(key > arr[mid])
        return binaySearch(arr, mid+1, high, key);
    return binaySearch(arr, low, mid-1, key);
}

console.log(search([5, 4, 1, 2, 3], 3));