function checkCards(arr, n) {
    if(arr.length % n !== 0) return false;

    arr = arr.sort((a, b) => a - b);
    console.log(arr);
    for(let i = 0; i < arr.length; i+=3) {
        for(let j = i; j < i + n - 1; j++) {
            if(arr[j + 1] - arr[j] !== 1)
                return false;
        }
    }

    return true;
}

console.log(checkCards([1, 2, 3, 9, 5, 4, 6, 7, 8], 3))