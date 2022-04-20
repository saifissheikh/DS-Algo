function checkOrder(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== i && arr[i] >= 0) {
            let temp = arr[arr[i]];
            arr[arr[i]] = arr[i]
            arr[i] = temp;
        }
    }
    return arr;
}

console.log(checkOrder([-1, 4, 2, -1, 1, -1, 5]));