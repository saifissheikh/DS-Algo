function containsDup(arr) {
    let lookup = {};

    for(let item of arr) {
        if(lookup[item]) return true;
        else lookup[item] = true;
    }
    return false;
}

// Other Method

function conDup(arr) {

    arr = arr.sort((a, b) => a - b);

    for(let i = 0; i <= arr.length - 1; i++)
        if(arr[i] === arr[i - 1]) 
            return true;
    
    return false;
}

console.log(conDup([1, 2, 3, 1]));