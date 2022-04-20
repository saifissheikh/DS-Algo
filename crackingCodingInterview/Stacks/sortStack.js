class Stack {
    constructor() {
        this.data = [];
        this.size = 0;
    }

    push(val) {
        this.data.push(val);
        this.size++;
    }

    pop() {
        this.size--;
        return this.data.pop();
    }

    peek() {
        return this.data[this.data.length - 1];
    }

}

class SortedStack {
    constructor() {
        this.secondStack = new Stack();
        this.data = [];
        this.size = 0;
    }

    push(val) {
        if(this.size === 0)
            this.data.push(val)
        else {
            while(val > this.peek()) {
                this.secondStack.push(this.data.pop());
            }
            this.data.push(val);
            while(this.secondStack.size !== 0)
                this.data.push(this.secondStack.pop());
        }
        this.size++;
    }

    pop() {
        this.size--;
        return this.data.pop();
    }

    peek() {
        return this.data[this.data.length - 1];
    }
}

let s = new SortedStack();
s.push(2);
s.push(3);
s.push(1);
s.push(4);
s.push(9);
console.log(s.pop());
console.log(s.pop());
console.log(s);