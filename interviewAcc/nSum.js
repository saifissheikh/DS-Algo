// function nSum(arr, n, k) {
//     let tempSum = 0;
//     let realSum = 0;
//     let results = [];
//     arr = arr.sort((a, b) => a - b);
//     for(let i = 0; i < n; i++)
//         realSum += arr[i];
//     tempSum = realSum;
//     for(let i = n; i < arr.length; i++) {
//         if(tempSum === k) {
//             results.push(arr.slice(i - n, i ))
//         }
//         tempSum = tempSum + arr[i] - arr[n - i];
      
//     }
//     return results;
// }

nSum = (arr, n, k) => {
    let results = [];

    getSum = arr => arr.reduce((acc, cur) => acc += cur, 0);

    makeSet = (curSet, i) => {
        if(curSet.length === n) {
            if(getSum(curSet) === k)
                results.push(curSet);
            return;
        }
        if(i >= arr.length)
            return;
        let clone = curSet.slice();
        makeSet(clone, i+1);
        clone.push(arr[i]);
        makeSet(clone, i + 1);
    }

    makeSet([], 0);

    return results;
}

console.log(nSum([2, 3, 4, 5, 1], 2, 5));

