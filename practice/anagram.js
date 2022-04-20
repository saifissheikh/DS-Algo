function compare(str1, str2) {
    if(str1.length !== str2.length)
        return false;
    
    let map1 = {};
    let map2 = {};

    for(let char of str1)
        map1[char] = (map1[char] || 0) + 1;
    
    for(let char of str2)
        map2[char] = (map2[char] || 0) + 1;
    
    for(let item in map1) {
        if(map1[item] !== map2[item])
            return false;
    }
    return true;
}

console.log(compare(' ', ' '));
console.log(compare('aaz', 'zza'));
console.log(compare('rat', 'car'));
console.log(compare('anagram', 'nagaram'));