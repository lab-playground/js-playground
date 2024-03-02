/**
 * 1. 创建一个新对象
 * 2. 将新对象的原型指向构造函数的原型
 * 3. 将构造函数中的 this 指向新对象
 * 4. 执行构造函数，并传入参数
 * @param fn
 * @param args
 * @returns {*|{}}
 */
function myNew(fn, ...args) {
    const obj = {};
    obj.__proto__ = fn.prototype;
    const result = fn.apply(obj, args);
    return result instanceof Object ? result : obj;
}

export default myNew
