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
        this.adjList[vertex2].push(vertex1);
    }

    removeEdge(v1, v2) {
        this.adjList[v1] = this.adjList[v1].filter((v) => v !== v2);
        this.adjList[v2] = this.adjList[v2].filter((v) => v !== v1);
    }

    removeVertex(v) {
        this.adjList[v].map((ver) => {
            this.removeEdge(ver, v);
        });

        delete this.adjList[v];
    }

    DFSRecursive(vertex) {
        let visited = {};
        let result = [];

        let dfs = (vertex) => {
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            this.adjList[vertex].map((v) => {
                if(!visited[v])
                    dfs(v);
            });
        }
        dfs(vertex);
        return result;
    }

    DFSIterative(start) {
        let result = [];
        let visited = {};
        let s = [start];
        visited[start] = true;

        while(s.length !== 0) {
            let vertex = s.pop();
            result.push(vertex);
            this.adjList[vertex].map((v) => {
                if(!visited[v]) {
                    visited[v] = true;
                    s.push(v)
                }
            })
        }
        console.log(result);
        return result;
    }

    BFS(start) {
        let result = [];
        let que = [start];
        let visited = {};
        visited[start] = true;
        while(que.length) {
            let vertex = que.shift();
            result.push(vertex);
            this.adjList[vertex].map(v => {
                if(!visited[v]) {
                    que.push(v);
                    visited[v] = true;
                }
            })
        }
        console.log(result);
        return result;
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
g.BFS('A');