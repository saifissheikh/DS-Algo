class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    reverseList() {
        if(this.length === 0 || this.length === 1) return false;

        let pointer = this.head;
        this.head = this.tail;
        this.tail = pointer;

        let prev = null;
        let temp;
        while(pointer !== null) {
            temp = pointer.next;
            pointer.next = prev;
            prev = pointer;
            pointer = temp;
        }

        return this;
    }

    print() {
        let srt = '';
        let pointer = this.head;
        while(pointer !== null) {
            srt += pointer.val + '->';
            pointer = pointer.next;
        }
        console.log(srt);
    }
}

let list = new LinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.reverseList();
list.print();