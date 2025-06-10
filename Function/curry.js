function curry(fn) {
  return function curried(...args) {
    if (args.length < fn.length) {
      return function (...args2) {
        return curried(...args.concat(args2));
      };
    }
    return fn.apply(this, args);
  };
}