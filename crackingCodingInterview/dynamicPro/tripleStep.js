function tripleStep(n, memo) {
    if(memo[n] !== undefined) return memo[n];
    if(n < 1) return 1;

    memo[n] = tripleStep(n-1, memo) + tripleStep(n - 2, memo) + tripleStep(n - 3, memo);
    return memo[n];
}

console.log(tripleStep(45, []));