var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // if the head and tail of list are null
    if (list.head === null && list.tail === null) {
      // create a new node with value of value
      var node = Node(value);
      // set list head and list tail to node 
      list.head = node;
      list.tail = node;
    } else {
      var newNode = Node(value);
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
  };

  list.contains = function(target) {
  // FOR REFERENCE
    // if the head and tail of list are set to different nodes (i.e. more than one node) 
    //   set currentNode to head
    //   while currentNode.next is not null 
    //     set currentNode = currentNode.next
    //   (currentNode is set to tail now)
    //   create a new node with value of value
    //   currentNode.next = new node
    //   currentNode = currentNode.next
    //   list.tail = currentNode
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


