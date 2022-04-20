function oneAway(str1, str2) {
    if(Math.abs(str1.length - str2.length) > 1) return false;

    let lookup = {};
    let bigger;
    let smaller;

    if(str1.length >= str2.length) {
        bigger = str1;
        smaller = str2;
    }
    else {
        bigger = str2;
        smaller = str1;
    }
    
    for(let char of smaller)
        lookup[char] = lookup[char] + 1 || 1;

    let oneEdit = false;

    for(let char of bigger) {
        if(!lookup[char] && oneEdit)
            return false;
        if(!lookup[char])
            oneEdit = true;
        else if(lookup[char])
            lookup[char] -= 1;
    }
    return true;
}

function anotherWay(str1, str2) {
    if(str1.length === str2.length)
        return checkOneEdit(str1, str2);
    else if(str1.length + 1 === str2.length)
        return checkOneInsert(str1, str2);
    else if(str1.length === str2.length + 1)
        return checkOneInsert(str2, str1);
    return false;
}

function checkOneEdit(str1, str2) {
    let found = false;
    let i = 0; j = 0;
    while(i !== str1.length && j !== str2.length) {
        if(str1[i] !== str2[j]) {
            if(found) 
                return false;
            found = true;
        }
        i++;
        j++;
    }
    return true;
}

function checkOneInsert(str1, str2) {
    let index1 = 0, index2 = 0;
    while(index1 < str1.length && index2 < str2.length) {
        if(str1[index1] !== str2[index2]) {
            if(index1 !== index2)
                return false;
            index2++;
        } else {
            index1++;
            index2++;
        }
    }
    return true;
}

console.log(anotherWay('acaf', 'aced'));