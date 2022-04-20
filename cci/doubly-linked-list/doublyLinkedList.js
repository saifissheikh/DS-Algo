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
        if(!this.head) {
            this.tail = node;
            this.head = node;
        }
        else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head)
            return null;
        let removeNode = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removeNode.prev;
            this.tail.next = null;
            removeNode.prev = null;
        }
        this.length--;
        return removeNode;
    }

    shift() {
        if(!this.head)
            return null;
        let oldHead = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val) {
        let node = new Node(val);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            let pointer = this.head;
            node.next = pointer;
            pointer.prev = node;
            this.head = node;
        }
        this.length++;
        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length)
            return null;
        let counter, pointer;
        if(index <= this.length/2) {
            counter = 0;
            pointer = this.head;
            while(index != counter) {
                pointer = pointer.next;
                counter++;
            }
        } else {
            counter = this.length - 1;
            pointer = this.tail;
            while(index != counter) {
                pointer = pointer.prev;
                counter--;
            }
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
        if(index < 0 || index > this.length)
            return false;
        else if(index === 0)
            this.unshift(val);
        else if(index === this.length)
             this.push(val);
        else {
            let prev = this.get(index - 1);
            let node = new Node(val);
            let next = prev.next;

            next.prev = node;
            prev.next = node;
            node.prev = prev;
            node.next = next;
            this.length++;
        }
        return true;
    }

    remove(index) {
        if(index < 0 || index >= this.length || !this.head)
            return false;
        else if(index === 0)
            return this.shift();
        else if(index === this.length - 1)
            return this.pop();
        else {
            let prevNode = this.get(index - 1);
            let removeNode = prevNode.next;
            let nextNode = removeNode.next;

            prevNode.next = nextNode;
            nextNode.prev = prevNode;

            removeNode.next = null;
            removeNode.prev = null;

            this.length--;
            return removeNode;

        }
    }
}

let list = new DoublyLinkedList();
list.push(20);
list.push(30);
list.push(50);
list.push(60);
list.push(70);
list.push(80);
list.push(90);
list.push(100);
console.log(list.insert(1, 10));
