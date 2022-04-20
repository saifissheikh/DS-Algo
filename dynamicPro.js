function fibMemo(n, memo = []) {
    if(memo[n] !== undefined) return memo[n];
    if(n <= 2) return 1;
    memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo);
    return memo[n];
}

function fibTabulation(n) {
    if(n <= 2) return 1;
    let fibNums= [0, 1, 1];
    for(let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }

    return fibNums[n];
}

function fibNormal(n) {
    if(n <= 2) return 1;
    return fibNormal(n - 1) + fibNormal(n - 2);
}

console.log(fibTabulation(45));