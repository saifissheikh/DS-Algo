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
list.push(3);
list.push(3);
list.push(3);
list.push(6);


function removeDup(head) {
    if(!head)
        return null;
    let charMap = {};
    let current = head;
    let prev = head;
    while(current) {
        if(!charMap[current.val]) {
            charMap[current.val] = 1;
            prev = current;
            current = current.next;
        } else {
            prev.next = current.next;
            current = current.next;
        }
    }
    return head;
}

console.log(removeDup(list.head));
