var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];
  
  return newTree;
};

var treeMethods = {
  addChild: function(value) {
    var child = Tree(value);
    this.children.push(child);
  },

  contains: function(target) {
    var found = false;
    var traverseTree = function(node) {
      if (node.value === target) {
        found = true;
      } else {
        if (node.children.length === 0) {
          return;
        }
        for (var i = 0; i < node.children.length; i++) {
          traverseTree(node.children[i]);
        }
      }
    };
    traverseTree(this);
    return found;
  } 
};





/*
 * Complexity: What is the time complexity of the above functions?
 */
