function perfect(arr, k) {
    let result = [];
    makeSet([], 0, k, false);

    function makeSet(curSet, i, r, visited) {
        if(r == 0 && !visited)
            result.push(curSet);
        if(i >= arr.length || r < 0)
            return;
        let clone1 = curSet.slice();
        clone1.push(arr[i]);
        makeSet(clone1, i + 1, r - arr[i], false);
        let clone2 = curSet.slice();
        makeSet(clone2, i + 1, r, true);
    }
    return result;
}

console.log(perfect([1, 2, 0, 3], 3));