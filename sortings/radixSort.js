// function getDigit(num, digit) {
//     num = num.toString().split('').reverse();
//     return num[digit];
// }

// function countDigit(num) {
//     return num.toString().length;
// }

function getDigit(num, digit) {
    return Math.floor(Math.abs(num)/Math.pow(10, digit)) % 10;
}

function digitCount(num) {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
    let max = 0;
    for(let i = 0; i < arr.length; i++) {
        max = Math.max(max, digitCount(arr[i]));
    }
    return max;
}

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);

    for(let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

console.log(radixSort([23, 5, 12, 2, 4567, 183, 1999, 238, 91994]));