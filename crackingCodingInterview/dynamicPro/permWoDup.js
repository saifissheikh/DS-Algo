function permutation(str) {
    let answer = [];
    var recurse = function (curPerm, remainingChars) {
        if(remainingChars.length === 0) {
            answer.push(curPerm);
        } else {
            for(let i = 0; i < remainingChars.length; i++) {
                recurse(curPerm + remainingChars.charAt(i), remainingChars.slice(0, i) + remainingChars.slice(i + 1));
            }
        }
    }
    recurse('', str);
    return answer;
}

console.log(permutation('abc'));