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

    partition(val) {
        if(this.head === null) return false;
        this.tail = this.head;
        let pointer = this.head;
        while(pointer !== null) {
            let next = pointer.next;
            if(pointer.val < val) {
                pointer.next = this.head;
                this.head = pointer;
            } else {
                this.tail.next = pointer;
                this.tail = pointer;
            }
            pointer = next;
        }
        this.tail.next = null;
    }
}


let list = new LinkedList();
list.insert(7);
list.insert(6);
list.insert(10);
list.insert(1);
list.insert(5);
list.insert(3);
list.insert(2);
list.partition(5);
list.printList();