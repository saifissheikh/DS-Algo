class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;

    }
}

class BinarySearchTree {
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
                if(val === current.val) return undefined;
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

    validateBST() {
        if(this.root === null) return false;

        let result = [];
        inorder(this.root);
        function inorder(node) {
            if(node.left)
                inorder(node.left);
            result.push(node.val);
            if(node.right)
                inorder(node.right);
        }
        for(let i = 1; i < result.length; i++) {
            if(result[i] < result[i - 1])
                return false;
        }

        return true;
    }
    
}

let tree = new BinarySearchTree();
tree.insert(4);
tree.insert(10);
tree.insert(1);
tree.insert(5);
tree.insert(6);
tree.insert(19);
console.log(tree.validateBST());
// tree.remove(10);
