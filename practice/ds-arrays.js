function rotateArray(arr, d) {
    for(let i = 0; i < d; i++) {
        let temp = arr.shift();
        arr.push(temp);
    }
    return arr;
}

function findSumInSortedRotatedArray(arr, sum) {
    let i;
    for(i = 0; i < arr.length; i++) {
        if(arr[i] > arr[i+1])
            break;
    }
    let left = (i + 1)%(arr.length);;
    let right = i;
    while(left != right) {
        if(arr[left] + arr[right] == sum)
            return true;
        if(arr[left] + arr[right] < sum)
            left = (left + 1)%(arr.length);
        else
            right = (arr.length + right - 1) % (arr.length);
    }
    return false;
}

console.log(findSumInSortedRotatedArray([3, 4, 5, 1, 2], 4));