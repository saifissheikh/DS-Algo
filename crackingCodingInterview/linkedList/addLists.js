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
}

function addLists(node1, node2) {
    if(node1 == null || node2 == null) return false;
    let newList = new LinkedList();
    let carry = 0;
    while(node1 !== null && node2 !== null) {
        let sum = node1.val + node2.val + carry;
        if(sum > 9 && node1.next !== null) {
            add = sum % 10;
            carry = Math.floor(sum/10 % 10);
            newList.insert(parseInt(add));
        } else {
            newList.insert(sum);
            carry = 0;
        }
        node1 = node1.next;
        node2 = node2.next;
    }
    return newList;
}

function recurseAdd(node1, node2, carry) {
    if(node1 === null && node2 === null && carry === 0) {
        return null;
    }
    let value = carry;
    if(node1 !== null)
        value += node1.val;
    if(node2 !== null)
        value += node2.val;
    
    let result = new Node((value % 10));
    
    if(node1 !== null || node2 !== null) {
        let temp = addLists(node1 === null ? null : node1.next,
                            node2 === null ? null : node2.next, value >= 10 ? 1 : 0);
        console.log(temp);
        result.next = new Node(temp.val);
    }
    return result;
}

let list1 = new LinkedList();
let list2 = new LinkedList();
list1.insert(7);
list1.insert(6);

list2.insert(5);
list2.insert(9);
list2.insert(5);

console.log(recurseAdd(list1.head, list2.head, 1));