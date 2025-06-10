function sum(a) {
  return function(b) {
    return b ? sum(a + b) : a;
  };
}
console.log(sum(1)(2)(3)());