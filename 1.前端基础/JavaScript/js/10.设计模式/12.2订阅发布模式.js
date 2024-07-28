// ### 3.12.1 订阅发布模式 Pub-Sub Pattern
class CusEventEmitter {
  constructor() {
    this.listeners = [];
  }

  on(type, cb, options = {}) {
    if (typeof type !== 'string' || typeof cb !== 'function') return false;
    this.listeners[type] = this.listeners[type] || [];
    this.listeners[type].push({
      cb,
      priority: options.priority || 0
    });
    return () => {
      this.listeners = this.listeners.filter(item => item.cb !== cb);
    };
  }
  off(type, cb) {
    if (typeof type !== 'string' || typeof cb !== 'function') return false;
    if (!this.listeners[type] || this.listeners[type].length === 0) return false;
    for (let i = 0; i < this.listeners[type].length; i++) {
      if (this.listeners[type][i] === cb) {
        this.listeners[type].splice(i, 1);
      }
    }
  }
  emit(type, data) {
    if (typeof type !== 'string') return false;
    this.listeners[type] && this.listeners[type].sort((a, b) => a.priority - b.priority).forEach(item => item.cb.call(null, data));
  }
}
