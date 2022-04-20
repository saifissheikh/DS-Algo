// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() { 
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let i = 0;
        let pointer = this.head
        while(pointer) {
            pointer = pointer.next;
            i++    
        }
        return i;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let pointer = this.head;
        if (pointer == null) return pointer;
        while(pointer.next !== null) {
            pointer = pointer.next;
        }
        return pointer;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if(!this.head) return;
            
        this.head = this.head.next;
    }

    removeLast() {
        let previous = this.head;
        if(!previous) return;
        if(!previous.next) {
            this.head = null;
            return;
        }
        let current = previous.next;
        
        while(current.next != null) {
            previous = previous.next;
            current = current.next;
        }

        if(!current.next) {
            previous.next = null;
        }
    }

    insertLast(data) {
        let newNode = new Node(data);
        let lastNode = this.getLast();
        if(lastNode)
            lastNode.next = newNode;
        else
            this.head = newNode; 
    }

    getAt(index) {
        let counter = 0;
        let node = this.head;
        if(!node) return null;
        if(index > this.size()) return;
        while(node) {
            if(counter == index) 
                return node;
            node = node.next;
            counter++;
        }
        return node;
    }

    removeAt(index) {
        if(!this.head) {
            return;
        }
      
        if(index === 0) {
            this.head = this.head.next;
            return;
        }
      
        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;
    }

    insertAt(data, index) {
        if(!this.head) {
            this.head = new Node(data);
            return;
        }
        if(index == 0) {
            this.head = new Node(data, this.head);
            return;
        }
        const previous = this.getAt(index-1) || this.getLast();
        let newNode = new Node(data, previous.next);
        previous.next = newNode;
        
    }

    forEach(fn) {
        for(let i = 0; i < this.size(); i++) {
            fn(this.getAt(i), i);
        }
    }
}

module.exports = { Node, LinkedList };
