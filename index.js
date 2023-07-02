function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      collection.forEach(callback);
    } else if (typeof collection === "object" ) {
      Object.values(collection).forEach(callback);
    }
  
    return collection;
  }
  function myMap(collection, callback) {
    if (Array.isArray(collection)) {
      return collection.map(callback);
    } else if (typeof collection === "object" && collection !== null) {
      return Object.values(collection).map(callback);
    }
  }
  function myReduce(collection, callback, acc) {
    if (Array.isArray(collection)) {
      if (acc === undefined) {
        return collection.reduce(callback);
      } else {
        return collection.reduce(callback, acc);
      }
    } else if (typeof collection === "object") {
      const values = Object.values(collection);
      if (acc === undefined) {
        return values.reduce(callback);
      } else {
        return values.reduce(callback, acc);
      }
    }
  }
  
 function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        return collection.find(predicate)
    }
    else if(typeof(collection) === "object") {
        return Object.values(collection).find(predicate)
    }
 }
 function myFilter(collection, predicate) {
    if(Array.isArray(collection)) {
        return collection.filter(predicate)
    }
    else if(typeof(collection) === 'object') {
        return Object.values(collection).filter(predicate)
    }
 }
 function mySize(collection) {
    if(Array.isArray(collection)) {
        return collection.length
    }
    else if(typeof(collection) === "object") {
        return Object.values(collection).length;
    }
 }
 function myFirst(array,n) {
    if(n) {
        return array.slice(0,n)

    }
    return array[0]
 }
  
  function myLast(array, n) {
    if (n) {
      return array.slice(-n);
    }
    return array[array.length - 1];
  }
  function myValues(obj) {
    return Object.values(obj);
  }
  function myKeys(obj) {
    return Object.keys(obj);
  }
  
  