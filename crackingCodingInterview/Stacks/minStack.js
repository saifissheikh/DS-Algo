class Stack {
    constructor() {
        this.data = [];
        this.minStack = [];
    }

    push(val) {
        if(this.data.length === 0 || val <= this.peekMin()) {
            this.minStack.push(val);
        }
        this.data.push(val);
    }

    pop() {
        let removeNode = this.data.pop();
        if(removeNode === this.peekMin()) {
            this.minStack.pop();
        }
        return removeNode;
    }

    peek() {
        return this.data[this.data.length - 1];
    }

    peekMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

let s = new Stack();
s.push(5);
s.push(2);
s.push(1);
s.push(4);
s.push(7);
s.push(2);
s.pop();
s.pop();
console.log(s.peekMin());