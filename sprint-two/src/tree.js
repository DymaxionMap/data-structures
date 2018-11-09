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
  }
};





/*
 * Complexity: What is the time complexity of the above functions?
 */
