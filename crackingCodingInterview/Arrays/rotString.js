function rotString(s1, s2) {
    if(s1.length === s2.length && s1.length > 0) {
        s = s1 + s1;
        return s.includes(s2);
    }
    return false;
}

console.log(rotString('waterbottle', 'erbottlewat'));