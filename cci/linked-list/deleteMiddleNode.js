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

    get(index) {
        if(!this.head || this.length <= index)
            return null;
        let counter = 0;
        let pointer = this.head;
        while(pointer && counter != index) {
            pointer = pointer.next;
            counter++;
        }
        return pointer;
    }

    shift() {
        if(!this.head)
            return null;
        let remove = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.length == 0) {
            this.tail = null;
        }
        return remove;
    }

    remove(index) {
        if(index >= this.length || index < 0)
            return null;
        else if(index === 0)
            return this.shift();
        else if(index === this.length - 1)
            return this.pop();
        else {
            let prev = this.get(index - 1);
            let temp = prev.next;
            prev.next = temp.next;
            this.length--;
            return temp;
        }
    }
}

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let list = new SinglyLinkedList();
list.push(1);
list.push(7);
list.push(3);
list.push(5);
list.push(2);
list.push(9);

function deleteMidNode(list) {
    if(!list.head)
        return null;
    let pointer = list.head;
    let count = 0;
    while(count != Math.floor(list.length/2)) {
        pointer = pointer.next;
        count++;
    }
    list.remove(count);
    return list;
}
