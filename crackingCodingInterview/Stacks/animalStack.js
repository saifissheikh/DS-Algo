class Node {
    constructor(type) {
        this.type = type;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enque(val) {
        let newNode = new Node(val);
        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    deque(val) {
        if(val === undefined || val === this.head.type) {
            let removeNode = this.head;
            this.head = this.head.next;
            removeNode.next = null;
            return removeNode;
        } else {
            let pointer = this.head;
            let prev;
            while(pointer.type !== val) {
                prev = pointer;
                pointer = pointer.next;
            }
            prev.next = pointer.next;
            pointer.next = null;
            return pointer;
        }
    }

    printQue() {
        let pointer = this.head;
        let str = '';
        while(pointer != null) {
            str += pointer.type + '<-';
            pointer = pointer.next;
        }
        console.log(str);
    }

    getLast() {
        return this.tail;
    }
}

class Queue {
    constructor() {
        this.que = new LinkedList();
    }

    enque(type) {
        this.que.enque(type);
    }

    dequeAny() {
        return this.que.deque();
    }

    dequeDog() {
        return this.que.deque('dog');
    }

    dequeCat() {
        return this.que.deque('cat');
    }

    print() {
        this.que.printQue();
    }
}

let q = new Queue();
q.enque('dog');
q.enque('cat');
q.enque('cat');
q.enque('dog');
q.print();
q.dequeCat();
q.dequeDog();
q.enque('dog');
q.print();

