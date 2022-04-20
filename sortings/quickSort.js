function pivot(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let pivotIndex = start;
    for(let i = start + 1; i <= end; i++) {
        if(pivot > arr[i]) {
            pivotIndex++;
            swap(arr, i, pivotIndex);
        }
       
    }
    swap(arr, start, pivotIndex);
    return pivotIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        // left
        quickSort(arr, left, pivotIndex - 1);
        // right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

function swap(arr, one, two) {
    let temp = arr[one];
    arr[one] = arr[two];
    arr[two] = temp;
}

console.log(quickSort([4, 8, 2, 1, 5, -10, 14, -2, 7, 6, 3]));