class QwithStack {
	constructor() {
		this.stack = [];
	}

	enque(val) {
		this.stack.push(val);
	}

	deque() {
		if(this.stack.length !== 0) {
            return this.recurse();
        }
		else return false;
	}

	recurse() {
		if(this.stack.length === 1)
			return this.stack.pop();
		let curVal = this.stack.pop();
		let result  = this.recurse();
		this.stack.push(curVal);
		
		return result;
	}
}

let q = new QwithStack();
q.enque(1);
q.enque(2);
q.enque(3);
q.enque(4);
console.log(q.deque());
console.log(q.deque());
