Function.prototype.myBind = function (context, ...args) {
    if (typeof this !== 'function') {
        throw new Error('Function.prototype.myBind - what is trying to be bound is not callable');
    }
    const self = this;
    return function (...bindArgs) {
        return self.apply(context, args.concat(bindArgs));
    }
}