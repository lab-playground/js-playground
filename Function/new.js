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

function myNew(constructor, ...args) {
    // 1. 创建空对象
    const obj = {};
    // 2. 绑定原型链（推荐写法）
    Object.setPrototypeOf(obj, constructor.prototype);
    // 3. 执行构造函数并绑定this
    const result = constructor.apply(obj, args);
    // 4. 处理返回值：若构造函数返回对象则直接返回，否则返回新对象
    return result instanceof Object ? result : obj;
}

export default myNew
