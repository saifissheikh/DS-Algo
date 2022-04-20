// Brute Force

function organise(arr) {
    for(let i = 1; i < arr.length; i++) {
        if(i != arr[i]) {
            if(arr.includes(i))
                swap(arr, i, arr.indexOf(i));
            else
                arr[i] = -1;
        }
    }
    return arr;
}

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

console.log(organise([-1, 3, 2, 5, -1, 4]));