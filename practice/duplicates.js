function areThereDuplicates(...arg) {
    let n = arg.length - 1;
    for(let i = 0, j = n; i <= Math.floor(n/2); i++) {
        if(arg[i] == arg[j])
            return true;
        j--;
    }
    return false;
}

console.log(areThereDuplicates(1, 2, 3, 4));
console.log(areThereDuplicates(1, 2, 3));