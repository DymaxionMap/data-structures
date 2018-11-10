var BinarySearchTree = function(value) {
  var tree = Object.create(treePrototype);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

var treePrototype = {};

treePrototype.insert = function (value) {
  var traverseTree = function (tree) {
    if (value > tree.value) {
      if (tree.right === null) {
        tree.right = BinarySearchTree(value);
      } else {
        traverseTree(tree.right);
      }
    } else {
      if (tree.left === null) {
        tree.left = BinarySearchTree(value);
      } else {
        traverseTree(tree.left);
      }
    }
  };

  traverseTree(this);
};

treePrototype.contains = function (value) {
  var found = false;
  var traverseTree = function (tree) {
    if (tree === null) {
      return;
    }

    if (value === tree.value) {
      found = true;
    } else if (value < tree.value) {
      traverseTree(tree.left);
    } else {
      traverseTree(tree.right);
    }
  };
  
  traverseTree(this);
  return found;
};

treePrototype.depthFirstLog = function (cb) {
  var traverseTree = function (tree) {
    if (tree === null) {
      return;
    }
    cb(tree.value);
    traverseTree(tree.left);
    traverseTree(tree.right);
  }

  traverseTree(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

 /*

insert, contains, and depthFirstLog: 
O(n) because we always travel through the entire tree

*/
