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

    insert(val) {
        let newNode = new Node(val);
        if(this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    printList() {
        if(this.head === null) return 'List is empty';
        let pointer = this.head;
        let str = '';
        while(pointer != null) {
            str += pointer.val + '->';
            pointer = pointer.next;
        }
        str += 'null';
        console.log(str);
    }
}


function makeIntersect(l1, l2) {
    l1.tail.next = l2.head.next.next;
    l1.tail = l2.tail;
}

function checkIntersection(l1, l2) {
    if(l1.tail !== l2.tail) return false;
    if(l1.head == null || l2.head === null) return false;

    if(l1.length === l2.length) {
        return startCheck(l1.head, l2.head);
    }
}

function startCheck(node1, node2) {
    while(node1 !== null && node2 !== null) {
        if(node1 === node2)
            return node1;
        node1 = node1.next;
        node2 = node2.next;
    }
    return false;
}


let list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(5);
list.insert(3);
list.insert(2);
list.insert(1);
list.printList();
console.log(list.isPalindromeStack());