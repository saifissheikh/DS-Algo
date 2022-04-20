class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length - 1;
        while(index > 0) {
            let parentIndex = Math.floor((index - 1)/2);
            if(this.values[parentIndex] > this.values[index]) break;
            let temp = this.values[parentIndex];
            this.values[parentIndex] = this.values[index];
            this.values[index]  = temp;
            index = parentIndex;
        }
    }

    extractMax() {
        let max = this.values[0];
        this.values[0] = this.values[this.values.length - 1];
        this.values[this.values.length - 1] = max;
        this.values.pop();

        this.bubbleDown();
        return max;
    }

    bubbleDown() {
        let parentIndex = 0;
        let childLeft;
        let childRight;
        while(true) {
            childLeft = 2 * parentIndex + 1;
            childRight = 2 * parentIndex + 2;
            if(this.values[childLeft] > this.values[parentIndex] && this.values[childRight] > this.values[parentIndex]) {
               if(this.values[childLeft] > this.values[childRight]) {
                   this.swap(this.values, parentIndex, childLeft);
                   parentIndex = childLeft;
               }
               else {
                   this.swap(this.values, parentIndex, childRight);
                   parentIndex = childRight;
               }
            } else if(this.values[childRight] > this.values[parentIndex]) {
                this.swap(this.values, parentIndex, childRight);
                parentIndex = childRight;
            } else if(this.values[childLeft] > this.values[parentIndex]) {
                this.swap(this.values, parentIndex, childLeft);
                parentIndex = childLeft;
            } else break;
        }
    }

    swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

let heap = new MaxBinaryHeap();
heap.insert(100);
heap.insert(99);
heap.insert(78);
heap.insert(55);
heap.insert(22);
heap.insert(79);
heap.insert(101);
heap.insert(100.5);
heap.extractMax();
console.log(heap.values);