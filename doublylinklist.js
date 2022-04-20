class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val);
        if(this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if(this.length === 0) return undefined;
        else if(this.length === 1) {
            let temp = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return temp;
        }
        else {
            let temp = this.tail.prev;
            temp.next = null;
            this.tail.perv = null;
            let rem = this.tail;
            this.tail = temp;
            this.length--;
            return rem;
        }
    }

    shift() {
        if(this.length === 0) return undefined;
        let removedNode = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = removedNode.next;
            this.head.prev = null;
            removedNode.next = null;
        }
        this.length--;
        return removedNode;
    }

    unshift(val) {
        let newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } 
        else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    getAt(index) {
        if(index < 0 || index >= this.length) return undefined;
        else if(index === this.length - 1) {
            return this.tail;
        } else {
            let mid = Math.floor(this.length - 1/2);
            if(index > mid) {
                let pointer = this.tail;
                let count = this.length - 1; 
                while(count !== index) {
                    pointer = pointer.prev;
                    count--;
                }
                return pointer;
            } else {
                let pointer = this.head;
                let count = 0;
                while(count !== index) {
                    pointer = pointer.next;
                    count++;
                }
                return pointer;
            }
        }
    }

    set(index, val) {
        let node = this.getAt(index);
        if(node) {
            node.val = val;
            return true;
        } else {
            return false;
        }
    }

    insert(index, val) {
        if(index < 0 || index > this.length) return undefined;
        else if(index === this.length) return this.push(val);
        else if(index === 0) return this.unshift(val);
        else {
            let prev = this.getAt(index - 1);
            let next = prev.next;
            let newNode = new Node(val);
            prev.next = newNode;
            newNode.prev = prev;
            newNode.next = next;
            next.prev = newNode;
            this.length++;
            return true;
        }
    }

    remove(index) {
        if(index >= this.length || index < 0) return false;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        let prev = this.getAt(index - 1);
        let removeNode = prev.next;
        let next = removeNode.next;
        removeNode.next = null;
        removeNode.prev = null;
        prev.next = next;
        next.prev = prev;
        this.length--;
        return true;
    }

    reverse() {
        if(this.length === 0) return undefined;
        if(this.length === 1) return this;
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let prev = null;
        let next;
        while(node !== null) {
            next = node.next;

            node.next = prev;
            node.prev = next;

            prev = node;
            node = next;
        }
        return this;
    }
}

let list = new DoublyLinkedList();
list.push(3);
list.push(4);
list.push(5);
list.push(7);
list.reverse();
// console.log(list.getAt(0));
console.log(list);