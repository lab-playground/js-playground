Function.prototype.myCall = function (context, ...arg) {
    const ctx = context || window
    ctx.fn = this
    const result = ctx.fn(...arg)
    delete ctx.fn
    return result;
}
