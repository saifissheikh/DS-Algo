class Node {
    constructor(val) {
        this.val = val;
        this.children = [];
        this.parent = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    insert(val, parentNode) {
        let newNode = new Node(val);
        if(!this.root) this.root = newNode;
        else {

        }
    }

    traversePost(node) {
        if(node.left)
            this.traversePost(node.left);
        if(node.right)
            this.traversePost(node.right);
        result.push(node);
    }
}