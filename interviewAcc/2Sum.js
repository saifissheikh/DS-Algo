// find sum of two elements in array that equals to given target Sum

function findSum(arr, sum) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === sum) {
                return [arr[i], arr[j]];
            }
        }
    }
}

twoSum = (arr, sum)  => {
    let hash = {};

    for(let num of arr) {
        console.log(hash);
        if(hash[num])
            return [hash[num], num];
        hash[sum - num] = num;
    }
    return [];
}

console.log(twoSum([2, 4, 1, 9, 7], 9));