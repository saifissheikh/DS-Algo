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

class MyQue {
    constructor() {
        this.s1 = new Stack();
        this.s2 = new Stack();
    }

    enque(val) {
        if(this.s1.size === 0)
            this.s1.push(val);
        else {
            while(this.s1.size !== 0)
                this.s2.push(this.s1.pop());
            this.s1.push(val);
            while(this.s2.size !== 0)
                this.s1.push(this.s2.pop());
        }
    }

    deque() {
        return this.s1.pop();
    }
}

let q = new MyQue();
q.enque(3);
q.enque(2);
q.enque(1);
console.log(q.deque());
console.log(q);
