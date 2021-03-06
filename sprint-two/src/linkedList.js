var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // if the head and tail of list are null
    var newNode = Node(value);
    if (list.head === null && list.tail === null) {
      // create a new node with value of value
      // set list head and list tail to node 
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    var value = list.head.value;
    list.head = list.head.next;
    return value;
  };

  list.contains = function(target) {
    var current = list.head;
    while (current !== null) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }

    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// removeHead and addTail are O(1) because you 
// already have a reference where the first and last nodes are.
// contains is O(n) because you will have to traverse through the whole list in the worst case.



