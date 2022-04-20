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

    isPalindrome() {
        let str = '';
        if(this.head === null) return null;
        let pointer = this.head;
        while(pointer !== null) {
            str += pointer.val;
            pointer = pointer.next;
        }
        return str === str.split('').reverse().join('');
    }

    isPalindromeStack() {
        let stack = [];
        let counter = 0;
        if(this.head === null) return null;
        let pointer = this.head;
        while(counter !== this.length) {
            if(counter < Math.floor(this.length/2)) {
                stack.push(pointer.val);
            } else if(this.length % 2 !== 0 && counter === Math.floor(this.length/2)) {

            }
            else {
                if(stack.pop() !== pointer.val)
                    return false;
            }
            pointer = pointer.next;
            counter++;
        }
        return true;
    }
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