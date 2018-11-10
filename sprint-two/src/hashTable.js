

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k,v];
  var bucket = this._storage.get(index);
  if(bucket === undefined) {
    bucket = [];
    this._storage.set(index, bucket);
  }
  for(var i = 0; i < bucket.length; i++) {
    if(bucket[i][0] === k) {
      bucket[i][1] = v;
      return;
    }
  }
  bucket.push(tuple);
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if(bucket === undefined) {
    return undefined;
  }
  for(var i = 0; i < bucket.length; i++) {
    if(bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if(bucket === undefined) {
    return undefined;  
  }
  for(var i = 0; i < bucket.length; i++) {
    if(bucket[i][0] === k) {
      bucket.splice(i,1);
    }
  }
  return undefined;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

// insert, remove, and retrieve  : Since we did not implement the double / halve functions, our 
// time complexity would be O(n). If we did implement the functions, the 
// time complexity would be O(1).


