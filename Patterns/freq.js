// function freq(arrNoraml, arrSquared) {
//     if(arrNoraml.length !== arrSquared.length) return false;
//     for(let item of arrNoraml) {
//         if(!arrSquared.includes((item * item)))
//             return false;
//     }
//     return true;
// }

function freq(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;
    let frequencyCount1 = {};
    let frequencyCount2 = {};
    for(let item of arr1) {
        frequencyCount1[item] = (frequencyCount1[item] || 0) + 1;
    }
    for(let item of arr2) {
        frequencyCount2[item] = (frequencyCount2[item] || 0) + 1;
    }

    for(let key in frequencyCount1) {
        if(!(key ** 2 in frequencyCount2)) return false;
        if(frequencyCount2[key ** 2] !== frequencyCount1[key]) return false;
    }
    return true;
}

console.log(freq([1,2,3], [4, 1, 9]));
console.log(freq([1,2,3], [1, 9]));
console.log(freq([1,2,1], [4, 4, 1]));