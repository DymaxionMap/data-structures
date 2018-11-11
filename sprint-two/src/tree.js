var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];
  
  return newTree;
};

var treeMethods = {
  addChild: function(value) {
    var child = Tree(value);
    child.parent = this;
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
  },
  
  removeFromParent: function(target) {
    if(!this) {
      return;
    }
    if(this.children.length === 0) {
      return;
    }
    var traverseTree = function(node) {
      //check if it has children
      for (var i = 0; i < node.children.length; i++) {
        if(node.children[i].value === target) {
          node.children.splice(i, 1);
          continue;
        }
        if(node.children[i].children.length > 0) {
          traverseTree(node.children[i]);
        }
      }
      
    } 
    traverseTree(this);
  }
  
};





/*
 * Complexity: What is the time complexity of the above functions?
 */
// addChild: O(1) because you already have a reference to the parent node
// contains: O(n) because in worst case you have to traverse the entire tree