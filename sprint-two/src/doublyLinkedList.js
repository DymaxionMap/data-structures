var DoublyLinkedList = function () {
  // this.list = {};
  this.head = null;
  this.tail = null;
};

DoublyLinkedList.prototype.addToTail = function (value) {
  // if the head and tail of list are null
  var newNode = new Nodes(value);
  if (this.head === null && this.tail === null) {
    // create a new node with value of value
    // set list head and list tail to node 
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
  }
};

DoublyLinkedList.prototype.removeHead = function () {
  if (this.head === null) {
    return null;
  }
  var value = this.head.value;
  this.head = this.head.next;
  if (this.head !== null) {
    this.head.previous = null;
  }

  return value;
};

DoublyLinkedList.prototype.contains = function (target) {
  var current = this.head;
  while (current !== null) {
    if (current.value === target) {
      return true;
    }
    current = current.next;
  }

  return false;
};

DoublyLinkedList.prototype.addToHead = function (value) {
  var newNode = new Nodes(value);
  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.head.previous = newNode;
    newNode.next = this.head;
    this.head = newNode;
  }
};

DoublyLinkedList.prototype.removeTail = function () {
  if(this.tail === null) {
    return null;
  }
  var value = this.tail.value;
  if (this.tail.previous === null) {
    this.tail = null;
  } else {
    this.tail = this.tail.previous;
    this.tail.next = null;
  }
  
  return value;
};

var Nodes = function(value) {
  this.value = value;
  this.next = null;
  this.previous = null;
};
