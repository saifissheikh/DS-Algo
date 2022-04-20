class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.rignt = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);
        if(!this.root) this.root = newNode;
        else {
            let current = this.root;
            while(true) {
                if(val < current.val) {
                    if(current.left === null) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                }
                else if(val > current) {
                    if(current.rignt === null) {
                        current.rignt = newNode;
                        return this;
                    }
                    current = current.rignt;
                }
            }
        }
    }

    inOrder() {
        let data = [];
        function traverse(node) {
            if(node.left);
                traverse(node.left);
            data.push(node.val);
            if(node.rignt)
                traverse(node.rignt);
        }
        traverse(this.root);
       return data;
    }
}