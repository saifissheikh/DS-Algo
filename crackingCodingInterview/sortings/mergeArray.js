function merge(arr1, arr2) {
    let i = 0, j = 0;
    let newArr = [];
    while(i < arr1.length && j < arr2.length) {
        if(arr2[j] <= arr1[i]) {
            newArr.push(arr2[j]);
            j++;
        } else {
            newArr.push(arr1[i]);
            i++;
        }
    }
    if(i < arr1.length)
        newArr.push(...arr1.slice(i));
    if(j < arr2.length)
        newArr.push(...arr2.slice(j));
    return newArr;
}

console.log(merge([2, 5, 6], [1, 2, 7, 8, 9]));