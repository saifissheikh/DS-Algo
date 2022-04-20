// My approach

function rotate(arr, n) {
    for(let i = 0; i < n; i++) {
        arr.push(arr.shift());
    }
    return arr;
}

// Method 1

function rotate1(arr, n) {
    let temp = [];
    for(let i = 0; i < n; i++) {
        temp.push(arr[i]);
    }
    for(let i = 0; i < n; i++) {
        arr.shift();
    }
    for(let i = 0; i < temp.length; i++) {
        arr.push(temp[i]);
    }
    return arr
}

// Method 2

function rotate2(arr, n) {
    for(let i = 0; i < n; i++) {
        leftRotateByOne(arr);
    }
    return arr;
}

function leftRotateByOne(arr) {
    let temp = arr[0]
    let i;
    for(i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i+1];
    }
    arr[i] = temp;
}

//Method 3 Jugling Algorithm

function rotate3(arr, d) {
    n = arr.length;
    leftRotate(arr, d, n);
    return arr;
}

function leftRotate(arr, d, n) {
    let i, j, k, temp;
    let gcd = calculateGCD(d, n);
    for (i = 0; i < gcd; i++) { 
        /* move i-th values of blocks */
        temp = arr[i]; 
        j = i; 
        while (true) { 
            k = j + d; 
            if (k >= n) 
                k = k - n; 
            if (k == i) 
                break; 
            arr[j] = arr[k]; 
            j = k; 
        } 
        arr[j] = temp; 
    } 
}

function calculateGCD(a, b) {
    if(b == 0)
        return a;
    return calculateGCD(b, a % b);
}

// Method 4 Reversal Algo

function rotate4(arr, d) {
    let n = arr.length;
    rev(arr, 0, d - 1);
    rev(arr, d, n - 1);
    rev(arr, 0, n - 1);
    return arr;
}

function rev(arr, start, end) {
    while(start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}


console.log(rotate4([1, 2, 3, 4, 5, 6, 7], 2));