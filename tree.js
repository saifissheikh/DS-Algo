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

    search(val) {
        if(!this.root) return false;
        let current = this.root;
        while(true) {
            if(val === current.val) return true;
            if(val < current.val) {
                if(current.left !== null)
                    current = current.left;
                else
                    return false;
            } else {
                if(current.right !== null)
                    current = current.right;
                else
                    return false;
            }
        }
    }

    bfs() {
        let q = [];
        let data = [];
        let node = this.root;
        q.push(this.root);
        while(q.length) {
            node = q.shift();
            data.push(node.val);
            if(node.left)
                q.push(node.left);
            if(node.right)
                q.push(node.right);
        }
        return data;
    }

    dfsPreOrder() {
        let data = [];

        function traverse(node) {
            data.push(node.val);
            if(node.left)
                traverse(node.left);
            if(node.right)
                traverse(node.right);
        }

        traverse(this.root);
        return data;
    }

    dfsPostOrder() {
        let data = [];

        function traverse(node) {
            if(node.left)
                traverse(node.left);
            if(node.right)
                traverse(node.right);
            data.push(node.val);
        }

        traverse(this.root);
        return data;
    }

    dfsInOrder() {
        let data = [];

        function traverse(node) {
            if(node.left)
                traverse(node.left);
            data.push(node.val);
            if(node.right)
                traverse(node.right);
        }

        traverse(this.root);
        return data;
    }

    remove(val, node, parent) {
        if(this.root.val === val) {
            let temp = new Node(-1);
            temp.left = this.root;
            this.root = temp;
            this.remove(val, this.root.left, this.root);
            this.root = this.root.left;
            return true;
        }

        node = node || this.root;

        if(val < node.val) {
            if(node.left)
                return this.remove(val, node.left, node);
            else return false;
        } else if(val > node.val) {
            if(node.right)
                return this.remove(val, node.right, node);
            else return false;
        } else {
            if(node.left && node.right) {
                node.val = minValue(node.right);
                return this.remove(node.val, node.right, node);
            } else if(parent.left === node) {
                if(node.left)
                    parent.left = node.left;
                else parent.left = node.right;
                return true;
            } else if(parent.right === node) {
                if(node.left)
                    parent.right = node.left;
                else parent.right = node.right;
                return true;
            }
        }

        function minValue(node) {
            if(node.left) {
                return minValue(node.left);
            } else return node.value;
        }
    }

    deleteBST() {
        function postOrder(node) {
            if(node.left)
                postOrder(node.left);
            if(node.right)
                postOrder(node.right);
        }

    }

    validateBST() {
        let result = [];
        inOrder(this.root);
        function inOrder(node) {
            if(node.left)
                inOrder(node.left);
            result.push(node.val);
            if(node.right)
                inOrder(node.right);
        }

        for(let i = 1; i < result.length; i++) {
            if(result[i] < result [i - 1])
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
// tree.remove(10);
console.log(tree.validateBST());