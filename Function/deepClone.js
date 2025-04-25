function deepClone(target, map = new WeakMap()) {
  // 处理基本类型和null
  if (target === null || typeof target !== 'object') {
    return target;
  }

  // 处理日期对象
  if (target instanceof Date) {
    return new Date(target);
  }

  // 处理正则表达式
  if (target instanceof RegExp) {
    return new RegExp(target);
  }

  // 处理 Map
  if (target instanceof Map) {
    const result = new Map();
    target.forEach((value, key) => {
      result.set(deepClone(key, map), deepClone(value, map));
    });
    return result;
  }

  // 处理 Set
  if (target instanceof Set) {
    const result = new Set();
    target.forEach((value) => {
      result.add(deepClone(value, map));
    });
    return result;
  }

  // 处理 Symbol
  if (typeof target === 'symbol') {
    return Symbol(target.description);
  }

  // 处理函数（直接返回原函数）
  if (typeof target === 'function') {
    return target;
  }

  // 检查是否已经克隆过该对象
  if (map.has(target)) {
    return map.get(target);
  }

  const result = Array.isArray(target) ? [] : {};
  // 将当前对象加入 WeakMap
  map.set(target, result);

  // 递归克隆所有属性
  for (let key in target) {
    if (target.hasOwnProperty(key)) {
      result[key] = deepClone(target[key], map);
    }
  }

  return result;
}

const obj = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4],
  },
};
export default deepClone