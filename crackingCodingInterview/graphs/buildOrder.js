class Graph {
    constructor() {
        this.adjList = {};
    }

    addVertex(vertex) {
        if(!this.adjList[vertex])
            this.adjList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        this.adjList[vertex1].push(vertex2);
        // this.adjList[vertex2].push(vertex1);
    }

    removeEdge(v1, v2) {
        this.adjList[v1] = this.adjList[v1].filter((v) => v !== v2);
    }

    buildOrder() {
        let done = [];
        for(let p in this.adjList) {
            if(!this.adjList[p].length)
                done.push(p);
        }
        if(!done.length) return false;

        while(true) {
            let empty = false;
            for(let p in this.adjList) {
                this.adjList[p].forEach((d) => {
                    if(done.includes(d)) {
                        this.removeEdge(p, d);
                        empty = true;
                    }
                    if(!this.adjList[p].length) {
                        if(!done.includes(p))
                            done.push(p);
                    }
                });
            }
            if(!empty) return done;
        }
    }
}

let g = new Graph();
g.addVertex('a');
g.addVertex('b');
g.addVertex('c');
g.addVertex('d');
g.addVertex('e');
g.addVertex('f');
g.addEdge('d', 'a');
g.addEdge('b', 'f');
g.addEdge('d', 'b');
g.addEdge('a', 'f');
g.addEdge('c', 'd');
console.log(g.buildOrder());
