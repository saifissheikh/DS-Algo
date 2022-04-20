class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head)
            return null;
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length == 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
}

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let list = new SinglyLinkedList();
list.push(23);
list.push(45);
list.push(23);
list.push(68);

function kToLast(head, k) {
    if(!head)
        return null;
    let p1 = head;
    let p2 = head;
    
    for(let i = 0; i < k; i++) {
        if(p1 == null)
            return null;
        p1 = p1.next;
    }

    while(p1 != null) {
        p1 = p1.next;
        p2 = p2.next;
    }
    return p2;
}

console.log(kToLast(list.head, 3));