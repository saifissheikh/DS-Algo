//Using concatenation the runtime grows by n2, its better to use array.push()

// function stringComp(str) {
//     let repeats = 1;
//     let newStr = '';
//     for(let i = 0; i < str.length; i++) {
//         if(str[i] == str[i+1]) 
//             repeats++;
//         else {
//             newStr += str[i] + repeats;
//             repeats = 1;
//         }
//     }
//     if(str.length < newStr.length)
//         return str;
//     return newStr;
// }

function stringComp(str) {
    let newStr = [];
    let repeats = 1;
    for(let i = 0; i < str.length; i++) {
        if(str[i] == str[i+1]) 
            repeats++;
        else {
            newStr.push(str[i]);
            newStr.push(repeats);
            repeats = 1;
        }
    }
    if(str.length < newStr.length)
        return str;
    return newStr.join('');
}

console.log(stringComp('aabbbccddaaf'));