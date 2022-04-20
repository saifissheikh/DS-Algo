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

    pruneTree() {
        if(!this.root) return null;
        prune(this.root);
        function prune(node) {
            if(node === null) return false;

            let leftContains = prune(node.left);
            let rightContains = prune(node.right);

            if(!leftContains) node.left = null;
            if(!rightContains) node.right = null;

            return node.val || leftContains || rightContains;
        }
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