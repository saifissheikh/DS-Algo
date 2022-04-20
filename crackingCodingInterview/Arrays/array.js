function replaceSpace(str) {
    return str.replace(/ /g, '%20');
}

function spaceR(str) {
    let newStr = '';
    for(let i = 0; i < str.length; i++) {
        if(str[i] === ' ')
            newStr += '%20';
        else
            newStr += str[i];
    }
    return newStr;
}

console.log(replaceSpace('Mr John Smith'));