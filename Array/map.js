// 手写 map
Array.prototype.myMap = function(fn) {
  const res = [];
  for (let i=0; i<this.length; i++) {
    res.push(fn(this[i], i, this));
  }
  return res;
};