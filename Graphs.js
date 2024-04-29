// Graphs

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1]?.filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2]?.filter((v) => v !== v1);
  }

  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach((v) => {
      this.removeEdge(vertex, v);
    });

    delete this.adjacencyList[vertex];
  }
}

const g = new Graph();

g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");

// console.log(g.adjacencyList);
g.addEdge("Dallas", "Tokyo");
g.addEdge("Tokyo", "Aspen");
g.addEdge("Aspen", "Dallas");
console.log(g.adjacencyList);

// g.removeEdge("Tokyo", "Aspen");
// g.removeEdge("Tokyo", "Dallas");

g.removeVertex("Tokyo");
console.log(g.adjacencyList);
