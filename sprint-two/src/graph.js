

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push({value: node, edges: []});
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var found = false;
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      found = true;
    }
  }

  return found;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      this.nodes.splice(i, 1);
    }
  }

  for (var i = 0; i < this.nodes.length; i++) {
    for (var j = 0; j < this.nodes[i].edges.length; j++) {
      if (this.nodes[i].edges[j] === node) {
        this.nodes[i].edges.splice(j, 1);
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {  
  var found = false;
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      for (var j = 0; j < this.nodes[i].edges.length; j++) {
        if (this.nodes[i].edges[j] === toNode) {
          found = true;
        }
      }
    }
  } 

  return found;              
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      this.nodes[i].edges.push(toNode);
    }
    if (this.nodes[i].value === toNode) {
      this.nodes[i].edges.push(fromNode);
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      for (var j = 0; j < this.nodes[i].edges.length; j++) {
        if (this.nodes[i].edges[j] === toNode) {
          this.nodes[i].edges.splice(j, 1);
        }
      }
      
    }
    if (this.nodes[i].value === toNode) {
      for (var j = 0; j < this.nodes[i].edges.length; j++) {
        if (this.nodes[i].edges[j] === fromNode) {
          this.nodes[i].edges.splice(j, 1);
        }
      }
      
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(function (node) {
    cb(node.value);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// addNode: O(1) because Javascript array push is constant time for new values
// contains: O(n) because we need to iterate thru all nodes 
// removeNode: O(n) because we need to iterate thru all nodes
// addEdge: O(n) because we need to iterate thru all nodes
// hasEdge: O(n) because we only check edges after we find fromNode
// removeEdge: O(n) because we only check edges after we find fromNode or toNode
// forEachNode: O(n) because we need to iterate thru all nodes 


