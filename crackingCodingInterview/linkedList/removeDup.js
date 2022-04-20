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

    removeDuplicate() {
        let lookup = {};
        let cur = this.head;
        let prev = this.head;
        while(cur != null) {
            if(lookup[cur.val]) {
                prev.next = cur.next;
                cur.next = null;
                cur = prev.next;
            } else {
                lookup[cur.val] = 1;
                prev = cur;
                cur = cur.next;
            }
        }
        this.tail = prev;
    }

    // other approach
    removeDup() {
        let slow = this.head;
        let fast = this.head;

        while(slow !== null) {
            while(fast.next !== null) {
                if (slow.val == fast.next.val) {
                    fast.next = fast.next.next;
                } else {
                    fast = fast.next;
                }
            }
            slow = slow.next;
        }
        this.tail = fast;
    }


    // iterative solution
    findkToLast(k) {
        let slow = this.head;
        let fast = this.head;
        let count = 0;
        while(fast.next !== null) {
            if(count >= k) {
                slow = slow.next; 
            }
            fast = fast.next;
            count++;
        }
        return slow;
    }

    otherWayToFindk(k) {
        function recur(k, node) {
            if(node == null) return 0;
            let index = recur(k, node.next) + 1;
            if(index === k) {
                console.log('The ' + k + 'th Node is' + node.val);
            }
            return index;
        }
        recur(k, this.head);
    }
}

let list = new LinkedList();
list.insert(4);
list.insert(4);
list.insert(5);
list.insert(4);
list.insert(3);
list.insert(4);
list.otherWayToFindk(1);
