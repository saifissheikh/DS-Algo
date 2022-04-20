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

class WGraph {
    constructor() {
        this.adjList = {};
    }

    addVertex(vertex) {
        if(!this.adjList[vertex])
            this.adjList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjList[vertex1].push({node: vertex2, weight});
        this.adjList[vertex2].push({node: vertex1, weight});
    }

    shortestPath(start, end) {
        let distances = {};
        let path = [];
        let smallest;
        const nodes = new PriorityQue();
        const prev = {};
        for (let v in this.adjList) {
            if(v === start) {
                distances[v] = 0;
                nodes.insert(v, 0);
            } 
            else {
                distances[v] = Infinity;
                nodes.insert(v, Infinity);
            }
                
            prev[v] = null;
        }

        while(nodes.values.length) {
            smallest = nodes.extractMin().val;
            if(smallest === end) {
                while(prev[smallest]) {
                    path.push(smallest);
                    smallest = prev[smallest];
                }
                break;
            }
            if(smallest || distances[smallest] !== Infinity) {
                for(let neighbor in this.adjList[smallest]) {
                    let nextNode = this.adjList[smallest][neighbor];

                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;

                    if(candidate < distances[nextNeighbor]) {
                        distances[nextNeighbor] = candidate;
                        prev[nextNeighbor] = smallest;
                        nodes.insert(nextNeighbor, candidate);
                    }
                }
            }
        }

        return path.concat(smallest).reverse();
    }
}


let g = new WGraph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B', 4);
g.addEdge('A', 'C', 2);
g.addEdge('B', 'E', 3);
g.addEdge('C', 'D', 2);
g.addEdge('C', 'F', 4);
g.addEdge('D', 'E', 3);
g.addEdge('D', 'F', 1);
g.addEdge('E', 'F', 1);

console.log(g.shortestPath('A', 'E'));