function selectionSort(arr) {
    
    for(let i = 0; i < arr.length; i++) {
        let min = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        if(arr[i] != arr[min])
            swap(arr, min, i)
    }
    return arr;
}

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

console.log(selectionSort([1, 3, 2, 10, 5]));