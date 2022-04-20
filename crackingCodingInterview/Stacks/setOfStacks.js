class Stack {
    constructor() {
        this.data = [];
        this.size = 0;
    }

    push(val) {
        this.data.push(val);
    }

    pop() {
        return this.data.pop();
    }

    peek() {
        return this.data[this.data.length - 1];
    }

}

class SetOfStacks {
    constructor() {
        this.stacks = [];
    }

    push(val) {
        if(this.stacks.length === 0)
            this.insertToStack(val);
        else {
            let found = false;
            this.stacks.forEach(stack => {
                if(stack.size < 3) {
                    found = true;
                    stack.push(val);
                    stack.size++;
                }
            });
            if(!found)
                this.insertToStack(val);
        }
    }

    insertToStack(val) {
        let s = new Stack();
        s.push(val);
        s.size++;
        this.stacks.push(s);
    }

    pop() {
        let lastStack = this.stacks[this.stacks.length - 1];
        let removedVal = lastStack.pop();
        lastStack.size--;
        if(lastStack.size === 0)
            this.stacks.pop();
        return removedVal;
    }

    popAt(stackIndex) {
        let remove;
        this.stacks.forEach((stack, index) => {
            if(stackIndex == index) {
                stack.size--;
                remove = stack.pop();
            }
        });
        return remove;
    }
}

let s = new SetOfStacks();
s.push(1);
s.push(5);
s.push(7);
s.push(1);
s.push(9);
s.push(7);
s.push(0);
s.push(5);
s.push(7);
s.push(8);
console.log(s.popAt(1));
// s.push(8);

console.log(s);