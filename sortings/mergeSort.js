
function merge(one, two) {
    let res = [];
    while(one.length && two.length) {
        if(one[0] < two[0])
            res.push(one.shift());
        else
            res.push(two.shift());
    }
    while(one.length)
        res.push(one.shift());
    while(two.length)
        res.push(two.shift());
    return res;
} 

function mergeSort(arr) {
    if(arr.length <= 1) 
        return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

console.log(mergeSort([7, 1, 10, 3, 6, 4, 1, 9, 10, 8, 15, 67, 34]));