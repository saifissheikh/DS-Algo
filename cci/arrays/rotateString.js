function rotateString(str, rotstr) {
    if(str.length != rotstr.length) return false;
    rotstr += rotstr;
    return rotstr.includes(str);
}

console.log(rotateString('heythere','therehey'));