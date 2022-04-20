function slidingWindow(arr, num) {
    let maxSum = 0;
    let tempSum = 0;

    for(let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum
    for(let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum
}

// Sum of consecutive 3 numbers
console.log(slidingWindow([2, 3, 5, 6 , 2, 23, 4, 6, 6], 3));