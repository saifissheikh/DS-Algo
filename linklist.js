class Node {
    constructor(data) {
        this.val = data;
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

    pop() {
        if(!this.head) return undefined;
        let cur = this.head;
        while(cur.next !== this.tail) {
            cur = cur.next;
        }
        let temp = this.tail;
        this.tail = cur;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    shift() {
        if(!this.head) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.length === 0)
            this.tail = null;
        return temp;
    }

    unshift(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    getAt(index) {
        if(index < 0 || index >= this.length) return null;
        let count = 0;
        let pointer = this.head;
        while(count !== index && pointer.next !== null) {
            pointer = pointer.next;
            count++;
        }
        return pointer;
    }

    set(index, val) {
        let node = this.getAt(index);
        if(node) {
            node.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) this.push(val);
        else if(index === 0) this.unshift(val);
        else {
            let prev = this.getAt(index - 1);
            let newNode = new Node(val);
            newNode.next = prev.next;
            prev.next = newNode;
            this.length++;
        }
        return true;
    }

    remove(index) {
        if(index < 0 || index > this.length) return false;
        if(index === 0) return this.shift();
        else if(index === this.length - 1) return this.pop();
        else {
            let prev = this.getAt(index - 1);
            let removed = prev.next;
            prev.next = removed.next;
            removed.next = null;
            this.length--;
            return removed;
        }
    }

    reverse() {
        if(this.length === 0) return false;
        else if(this.length === 1) return true;
        else {
            let node = this.head;
            this.head = this.tail;
            this.tail = node;

            let next;
            let prev = null;
            while(node !== null) {
                next = node.next;
                node.next = prev;

                prev = node;
                node = next;
            }
            return this;
        }
    }

}

let list = new SinglyLinkedList();
list.push(3);
list.push(4);
list.push(5);
list.push(7);
console.log(list.reverse());
console.log(list);