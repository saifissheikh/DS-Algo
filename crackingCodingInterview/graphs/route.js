class Graph {
    constructor() {
        this.adjList = {};
    }

    addVertex(vertex) {
        if(!this.adjList[vertex])
            this.adjList[vertex] = [];
    }

    addEdge(v1, v2) {
        this.adjList[v1].push(v2);
        this.adjList[v2].push(v1);
    }

    searchRoute(start, end) {
        let result = [];
        let visited = {};
        let que = [start];
        visited[start] = true;
        while(que.length) {
            let vertex = que.shift();
            result.push(vertex);
           for(let v of this.adjList[vertex]) {
                if(!visited[v]) {
                    if(v === end) {
                        return true;
                    }
                    else {
                        que.push(v);
                        visited[v] = true;
                    }
                }
            }
        }
        console.log(result);
        return false;
    }
}


let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

console.log(g.searchRoute('A', 'F'));