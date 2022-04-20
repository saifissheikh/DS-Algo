class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);
        if(!this.root) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true) {
                if(val === current.val) return false;
                if(val < current.val) {
                    if(current.left === null) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                } else {
                    if(current.right === null) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }

   findLast() {
        let que = [];
        que.push(this.root);
        let node;
        while(que.length) {
            node = que.shift();
            if(node.right !== null)
                que.push(node.right);
            if(node.left !== null)
                que.push(node.left);
        }
        return node;
   }
}

let tree = new BinaryTree();
tree.insert(5);
tree.insert(1);
tree.insert(7);
tree.insert(3);
tree.insert(4);
tree.insert(8);
tree.insert(10);
console.log(tree.findLargeAtRow());