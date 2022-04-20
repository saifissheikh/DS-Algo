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

	BFT(node) {
		let curLevel = 1;
		node.level = 1;
		let q = [ ];
		q.push(node);
		let str = '';
		
		while(q.length) {
			let newNode = q.shift();
			if(newNode.level > curLevel) {
				str += '\n';
				curLevel = curLevel + 1;
			}
            str += ' ' +  newNode.val;
			if(newNode.left) {
				newNode.left.level = newNode.level + 1;
				q.push(newNode.left);
			}
			if(newNode.right) {
				newNode.right.level = newNode.level + 1;
				q.push(newNode.right);
			}
		}
		console.log(str);
	}
}

let tree = new BinaryTree();
tree.insert(4);
tree.insert(10);
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(12);
tree.insert(15);
tree.insert(8);
tree.insert(5);
tree.insert(6);
tree.insert(19);
tree.BFT(tree.root);
