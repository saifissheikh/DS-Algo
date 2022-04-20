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

    insertLast(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    print() {
        let str = '';
        let pointer = this.head;
        while(pointer !== null) {
            str = str + pointer.val + '->'
            pointer = pointer.next;
        }
        console.log(str);
    }

    findMid() {
        if(!this.head) return null;
        let slow = this.head;
        let fast = slow;
        while(fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }
}

let ll = new LinkedList();
ll.insertLast(1);
ll.insertLast(2);
ll.insertLast(3);
ll.insertLast(4);
ll.insertLast(5);
ll.insertLast(6);
ll.insertLast(7);
ll.insertLast(8);
ll.print();

console.log(ll.findMid());