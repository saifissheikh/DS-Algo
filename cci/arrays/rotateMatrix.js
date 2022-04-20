function rotateMatrix(arr) {
    if(arr.length == 0 || arr.length != arr[0].length)
        return false;
    let n = arr.length;
    for(let layer = 0; layer < n/2; layer++) {
        let first = layer;
        let last = n - 1 - layer;
        for(let i = first; i < last; i++) {
            let offset = i - first;
            let top = arr[first][i];

            arr[first][i] = arr[last - offset][first];

            arr[last-offset][first] = arr[last][last - offset];

            arr[last][last - offset] = arr[i][last];

            arr[i][last] = top;
        }
    }
    return true;
}