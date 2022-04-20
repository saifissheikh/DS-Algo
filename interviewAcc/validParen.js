function checkParen(str) {
	let stack = [];

	let isOpen = {
	    '(' : true,
	    '{' : true,
 	    '[' : true
	}

	let isClose = {
	    ')' : '(',
	    '}' : '{',
	    ']' : '['
	}

    let i = 0;

	while(i < str.length) {
		if(isOpen[str[i]])
			stack.push(str[i]);
		else if (isClose[str[i]]) {
            if(isClose[str[i]] !== stack.pop())
                return false;
        }
        i++;
    }
    if(stack.length) return false;
    
    return true;
}

console.log(checkParen('abc[({})])'));
