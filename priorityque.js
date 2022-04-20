class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQue {
    constructor() {
        this.values = [];
    }

    insert(val, p) {
        let newNode = new Node(val, p);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        let parentIdx;
        while(idx > 0) {
            parentIdx = Math.floor((idx - 1)/2);
            if(this.values[parentIdx].priority < this.values[idx].priority) {
                let temp = this.values[parentIdx];
                this.values[parentIdx] = this.values[idx];
                this.values[idx] = temp;
                idx = parentIdx;
            } else break;
        }
    }

    extractMin() {
        let min = this.values[0];
        this.values[0] = this.values[this.values.length - 1];
        this.values[this.values.length - 1] = min;
        this.values.pop();

        this.bubbleDown();

        return min.val;
    }

    bubbleDown() {
        let parentIdx = 0;
        let leftChild;
        let rightChild;
        while(true) {
            leftChild = 2 * parentIdx + 1;
            rightChild = 2 * parentIdx + 2;
            if((this.values[parentIdx].priority < this.values[leftChild].priority) && 
                (this.values[parentIdx].priority < this.values[rightChild].priority) &&
                (this.values[leftChild].priority > this.values[rightChild].priority)) {
                    this.swap(this.values, parentIdx, leftChild);
                    parentIdx = leftChild;
            } else if(
                (this.values[parentIdx].priority < this.values[leftChild].priority) && 
                (this.values[parentIdx].priority < this.values[rightChild].priority) &&
                (this.values[rightChild].priority > this.values[leftChild].priority)) {
                    this.swap(this.values, parentIdx, rightChild);
                    parentIdx = rightChild;
            } else if(
                (this.values[parentIdx].priority < this.values[leftChild].priority)
            ) {
                this.swap(this.values, parentIdx, leftChild);
                parentIdx = leftChild;
            } else if(this.values[parentIdx].priority < this.values[rightChild].priority) {
                this.swap(this.values, parentIdx, rightChild);
                parentIdx = rightChild;
            } else break;
        }
    }

    swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

}

let heap = new PriorityQue();
heap.insert(100, 3);
heap.insert(99, 2);
heap.insert(78, 4);
heap.insert(55, 5);
heap.insert(22, 1);
heap.extractMin();
console.log(heap);