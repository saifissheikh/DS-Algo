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

   sequence() {
       if(this.root === null) return false;
       let sequences = [];

       function recurse(nodes, travelled) {
        let noChild = true;
        nodes.forEach((node) => {
            if(node.left !== null && travelled[node.left.value] === undefined) {
                noChild = false;
                travelled[node.left.value] = true;
                recurse(nodes.concat[node.left], travelled);
                delete travelled[node.left.value];
            }
            if(node.right !== null && travelled[node.right.value] === undefined) {
                noChild = false;
                travelled[node.right.value] = true;
                recurse(nodes.concat[node.right], travelled);
                delete travelled[node.right.value];
            }

            if(noChild) {
                sequences.push
            }
        });
       }

       let startTravelled = {};
       startTravelled[this.root.value] = true;
       recurse([this.root], startTravelled);
       return sequences;
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
