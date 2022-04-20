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
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    isPalindrome() {
        let slow = this.head;
        let fast = this.head;

        while(fast !== null && fast.next !== null) {
            fast = fast.next.next;
            slow = slow.next;
        }

        slow = this.reverse(slow);
        fast = this.head;

        while(slow !== null) {
            if(slow.val !== fast.val) return false;
            slow = slow.next;
            fast = fast.next;
        }
        return true;
    }

    reverse(pointer) {
        let prev = null;
        let next;
        while(pointer !== null) {
            next = pointer.next;
            pointer.next = prev;
            prev = pointer;
            pointer = next;
        }
        return prev;
    }

    print() {
        let pointer = this.head;
        let str = '';
        while(pointer !== null) {
            str = str + pointer.val + '->';
            pointer = pointer.next;
        }
        console.log(str);
    }
}

let ll = new LinkedList();
ll.insert(1);
ll.insert(2);
ll.insert(1);
ll.insert(2);
ll.insert(1);
console.log(ll.isPalindrome());
ll.print();