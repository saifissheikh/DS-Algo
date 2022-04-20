function revSent(str) {
	let result = '';
	str = str.split(' ');
	let stack = [];
	for(let word of str)
		stack.push(word);
	
	while(stack.length) {
		result = result + ' ' + stack.pop();
	}
	return result;
}

console.log(revSent('I love Bang'));
