class PubSub {
  constructor() {
    this.subscribers = {};
  }

  // 订阅事件
  on(eventName, fn) {
    if (!this.subscribers[eventName]) {
      this.subscribers[eventName] = [];
    }
    this.subscribers[eventName].push(fn);
  }

  // 发布事件
  emit(eventName, ...args) {
    const subscribers = this.subscribers[eventName];
    if (subscribers) {
      subscribers.forEach((fn) => {
        fn(...args);
      });
    }
  }
}
export default PubSub;