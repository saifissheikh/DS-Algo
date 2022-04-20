getDigits = (num, d) =>  Math.floor(num/Math.pow(10, d)) % 10;

digitCount = num => num.toString().length;

mostDigits = arr => {
    let max = 0;
    arr.map((item) => max = Math.max(digitCount(item), max));
    return max;
}

radixSort = arr => {
    let maxDigit = mostDigits(arr);
    for(let k = 0; k < maxDigit; k++) {
        let buckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < arr.length; i++) {
            let digit = getDigits(arr[i], k);
            buckets[digit].push(arr[i]);
        }
        arr = [].concat(...buckets);
    }
    return arr;
}

console.log(radixSort([43, 2345, 23, 1, 9, 12, 290]));