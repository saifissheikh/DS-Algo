class BuilStackWithQ {
	constructor() {
		this.que = [];
	}

	push(val) {
		this.que.push(val);
		let len = this.que.length;
		while(len > 1) {
			this.que.push(this.que.shift());
            len--;
		}
	}

	pop() {
		return this.que.shift();
	}
}

let stack = new BuilStackWithQ();
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.pop());
console.log(stack.pop());

