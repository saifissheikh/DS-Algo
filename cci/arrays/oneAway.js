// Check two strings are equal by adding or deleting or replace one char

// function oneAway(str1, str2) {
//     if(str1 === str2) 
//         return true;
//     let diffString = Math.abs(str1.length - str2.length);
//     if(diffString > 1) 
//         return false;
//     let edits = 0;
//     let one = {};
//     let two = {};

//     for(let char of str1) 
//         one[char] = one[char] ? one[char] + 1 : 1;
    
//     for(let char of str2)
//         two[char] = two[char] ? two[char] + 1 : 1;
    
//     for(let char in one) {
//         if(one[char] != two[char])
//             edits++
//         if(edits > 2)
//             return false;
//     }
//     if(edits > 2 && diffString)
//         return false;
//     return true;
// }

//easier approach

function oneAway(str1, str2) {
    if(str1 === str2)
        return true;
    else if(str1.length == str2.length)
        return replaceChar(str1, str2);
    else if(str1.length + 1 == str2.length)
        return editOneChar(str1, str2);
    else if(str2.length + 1 == str1.length)
        return editOneChar(str2, str1);
    else
        return false;
}

function replaceChar(str1, str2) {
    let edits = false;
    for(let i = 0; i < str1.length; i++) {
        if(str1[i] !== str2[i]) {
            if(edits)
                return false;
            edits = true;
        }
    }
    return true;
}

function editOneChar(one, two) {
    let index1 = 0;
    let index2 = 0;
    for(let i = 0; i < one.length; i++) {
        if(one[i] !== two[i]) {
            if(index1 !== index2)
                return false;
            index2++;
        }
        else {
            index1++;
            index2++;
        }
    }
    return true;
}


console.log(oneAway('abc', 'abccd'));