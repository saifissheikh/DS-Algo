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

    nextNode(val) {
        return inOrder(this.root);
        function inOrder(node) {
            if(node.val === val) {
                if(node.left) return node.left.val;
                else if(node.right) return node.right.val;
                else return false;
            } else if(val > node.val)
                inOrder(node.right);
            else
                inOrder(node.left);
        }
    }
    
}

let tree = new BinarySearchTree();
tree.insert(4);
tree.insert(10);
tree.insert(1);
tree.insert(5);
tree.insert(6);
tree.insert(19);
console.log(tree.nextNode(6));
// tree.remove(10);
