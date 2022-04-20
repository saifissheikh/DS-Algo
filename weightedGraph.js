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
        const nodes = new PQue();
        const prev = {};
        for (let v in this.adjList) {
            if(v === start) {
                distances[v] = 0;
                nodes.enque(v, 0);
            } 
            else {
                distances[v] = Infinity;
                nodes.enque(v, Infinity);
            }
                
            prev[v] = null;
        }

        while(nodes.values.length) {
            smallest = nodes.deque().val;
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
                        nodes.enque(nextNeighbor, candidate);
                    }
                }
            }
        }

        return path.concat(smallest).reverse();
    }
}

class PQue {
    constructor() {
        this.values = [];
    }

    enque(val, p) {
        this.values.push({val, p});
        this.sort();
    }

    deque() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.p - b.p);
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