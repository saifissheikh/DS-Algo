function manipulate(arr) {
    let newArr = [];
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== 0) {
            newArr.push(arr[i]);
            count++;
        }
    }
    for(let k = 0; k < count; k++)
        newArr.push(0);
    return newArr;
}

console.log(manipulate([0, 1, 0, 2, 3, 0]));