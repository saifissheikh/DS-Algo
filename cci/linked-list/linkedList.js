class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

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

    unshift(val) {
        let node = new Node(val);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
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

    set(index, val) {
        let node = this.get(index);
        if(node) {
            node.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if(index > this.length || index < 0)
            return null;
        else if(index === 0)
            this.unshift(val);
        else if(index === this.length)
            this.push(val);
        else {
            let prev = this.get(index - 1);
            let node = new Node(val);
            node.next = prev.next;
            prev.next = node;
            this.length++;
        }
        return true;
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

    reverse() {
        if(!this.head) 
            return null;
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let prev = null;
        let next;
        for(let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

}

module.exports = Node;
module.exports = SinglyLinkedList;