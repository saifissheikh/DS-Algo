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
}

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function sumList(one, two) {
    let sumL = new SinglyLinkedList();
    let sum = 0;
    let pointerOne = one.head;
    let pointerTwo = two.head;
    let numOne = [];
    let numTwo = [];
    while(pointerOne) {
        numOne.push(pointerOne.val);
        pointerOne = pointerOne.next;
    }

    while(pointerTwo) {
        numTwo.push(pointerTwo.val);
        pointerTwo = pointerTwo.next;
    }
    sum = parseInt(numOne.reverse().join('')) + parseInt(numTwo.reverse().join(''));
    sum = sum.toString().split('').reverse();
    for(let i = 0; i < sum.length; i++) {
        sumL.push(sum[i]);
    }
    return sumL;
}

let listOne = new SinglyLinkedList();
listOne.push(1);
listOne.push(2);
listOne.push(3);
let listTwo = new SinglyLinkedList();
listTwo.push(1);
listTwo.push(2);
listTwo.push(3);

console.log(sumList(listOne, listTwo));