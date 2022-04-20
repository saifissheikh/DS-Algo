
function findMin(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > arr[i + 1])
            return arr[i + 1];
    }
    return arr[0];
}

// Using Binary Search

function findMin2(arr, low, high) {
    while(low < high) 
    { 
        let mid = low + (high - low) / 2; 
        if (arr[mid] == arr[high]) 
            high--; 
              
        else if(arr[mid] > arr[high]) 
            low = mid + 1; 
        else
            high = mid; 
    } 
    return arr[high]; 
}

console.log(findMin2([5, 6,1, 2, 3, 4], 0, 5));