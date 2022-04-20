function reverseSentence(str) {
	let arr = str.split(' ');
	let revStr = '';
	for(let i = arr.length - 1; i >=0; i--) {
		revStr += arr[i] + ' ';
    }
	return revStr;
}

function replaceAt(string, index, replacementValue) {
    let substringBeforeReplacementValue = string.substr(0, index);
    let substringAfterReplacementValue = string.substr(index + replacementValue.length);
  
    return substringBeforeReplacementValue + replacementValue + substringAfterReplacementValue;
}

function revSent(sent) {
    function revWord(start, end) {
        while(start < end) {
            let temp = sent[start];
            sent = replaceAt(sent, start, sent[end]);
            sent = replaceAt(sent, end, temp);

            start++;
            end--;
        }
    }

    let s = null, e = null;
    for(let i = 0; i < sent.length; i++) {
        if(s === null && sent[i] !== ' ')
            s = i;
        
        if(e === null && sent[i] === ' ') {
            e = i - 1;
            revWord(s, e);
            s = null;
            e = null;
        }
    }

    if(s !== null && e === null) {
        revWord(s, sent.length - 1);
    }
    revWord(0, sent.length - 1);
    return sent;
}

console.log(revSent('I love Bangalore'));
