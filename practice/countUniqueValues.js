function countUnique(arr) {
    if(arr.length == 0) return 0;
    for(let i = 0, j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
        if(j == arr.length - 1) return i+1;
    }
}

console.log(countUnique([1, 2,3, 3, 4, 5, 5 , 6 , 7, 8, 9]));