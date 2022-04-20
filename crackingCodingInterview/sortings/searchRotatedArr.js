function search(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        let mid = Math.floor((left + right)/2);
        if(arr[mid] > arr[right]) {
            left = mid + 1;
        }
        else {
            right = mid;
        }
    }

    let start = left;
    left = 0;
    right = arr.length - 1;

    if(target >= arr[start] && target <= arr[right])
        left = start;
    else
        right = start;

    while(left <= right) {
        let mid = Math.floor((left + right)/2);
        if(arr[mid] === target) return mid;
        else if(arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return false;
}

console.log(search([3, 4, 5, 6, 1, 2], 0));