// check to see if the array indexes are cyclic in nature

function isCyclic(arr) {
    let p = 0, q = 0;
    while(true) {
        if(p < 0 || q < 0 || p >= arr.length || q >= arr.length)
            return false;
        
        q = arr[q];
        if(q === p) return true;
        if(q >= arr.length || q < 0)
            return false;
        q = arr[q];
        if(q === p) return true;
        p = arr[p];
        if(q === p) return true;
    }
}

console.log(isCyclic([1, 2, 3, 4, 5]));