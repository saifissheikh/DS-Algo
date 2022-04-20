function rotate(arr, k) {

    let count = 0;
    let i = k % arr.length;
    console.log(i);
    let prev = arr[0];

    while(count < arr.length) {
        let temp = arr[i];
        arr[i] = prev;
        prev = temp;

        i = (i + k) % arr.length;
        count++;
    }
    return arr;
}

console.log(rotate(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3));