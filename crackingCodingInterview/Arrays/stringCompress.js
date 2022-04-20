stringCompress = (str) => {
    let compStr = '', count = 1, noRepeat = false;
    for(let i = 0; i < str.length - 1; i++) {
        if(str[i] !== str[i + 1]) {
            compStr += str[i] + count;
            count = 1;
        } else {
            count++;
            noRepeat = true;
        }
    }
    if(!noRepeat) return str;
    compStr += str[str.length - 1] + count;
    return compStr;
}

console.log(stringCompress('aabc'));