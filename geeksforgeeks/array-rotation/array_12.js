// reversal Algo again

function rotate4(arr, d) {
    let n = arr.length;
    rev(arr, 0, d - 1);
    rev(arr, d, n - 1);
    rev(arr, 0, n - 1);
    return arr;
}

function rev(arr, start, end) {
    while(start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}


console.log(rotate4([1, 2, 3, 4, 5, 6, 7], 2));